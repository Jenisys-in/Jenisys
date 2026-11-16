-- Applied to the jenisys Supabase project on 2026-11-16.
-- Newsletter sign-ups are stored first, so an address is never lost if email delivery fails.
-- RLS on with no policies: only the server (secret/service_role key) can read or write.

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  email text not null,
  source text,
  unique (email)
);

alter table public.newsletter_subscribers enable row level security;
revoke all on public.newsletter_subscribers from anon, authenticated;
