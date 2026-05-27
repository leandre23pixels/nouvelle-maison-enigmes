import { createClient } from "@supabase/supabase-js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-game-token",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

function isAuthorized(req: Request) {
  const expectedToken = Deno.env.get("GAME_SYNC_TOKEN") ?? "LSO2012";
  return req.headers.get("x-game-token") === expectedToken;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (!isAuthorized(req)) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ error: "Missing Supabase environment variables" }, 500);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  try {
    if (req.method === "GET") {
      const url = new URL(req.url);
      const roomId = url.searchParams.get("roomId") || "nouvelle-maison";

      const { data, error } = await supabase
        .from("nouvelle_maison_sync")
        .select("data, updated_at")
        .eq("room_id", roomId)
        .maybeSingle();

      if (error) throw error;

      return jsonResponse({
        data: data?.data ?? null,
        updatedAt: data?.updated_at ?? null,
      });
    }

    if (req.method === "POST") {
      const body = await req.json();
      const roomId = String(body?.roomId || "nouvelle-maison").trim();

      if (!roomId || !body?.data || typeof body.data !== "object" || Array.isArray(body.data)) {
        return jsonResponse({ error: "Invalid sync payload" }, 400);
      }

      const { data, error } = await supabase
        .from("nouvelle_maison_sync")
        .upsert({ room_id: roomId, data: body.data }, { onConflict: "room_id" })
        .select("data, updated_at")
        .single();

      if (error) throw error;

      return jsonResponse({
        data: data.data,
        updatedAt: data.updated_at,
      });
    }

    return jsonResponse({ error: "Method not allowed" }, 405);
  } catch (error) {
    return jsonResponse(
      { error: error instanceof Error ? error.message : "Sync failed" },
      500,
    );
  }
});
