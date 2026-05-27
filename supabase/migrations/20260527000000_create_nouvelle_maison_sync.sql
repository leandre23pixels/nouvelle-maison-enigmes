create table if not exists public.nouvelle_maison_sync (
  room_id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create or replace function public.set_nouvelle_maison_sync_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_nouvelle_maison_sync_updated_at on public.nouvelle_maison_sync;

create trigger set_nouvelle_maison_sync_updated_at
before update on public.nouvelle_maison_sync
for each row
execute function public.set_nouvelle_maison_sync_updated_at();

alter table public.nouvelle_maison_sync enable row level security;
