-- Applied to the jenisys Supabase project (ap-southeast-2) on 2026-11-13.
-- Records written by the site's server-side form handlers.
-- RLS is on with no policies: only the server (secret/service_role key) can read or write.

create table public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  project_type text,
  budget text,
  timeline text,
  message text,
  payload jsonb not null default '{}'::jsonb
);

create table public.startup_partnerships (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text,
  pitch_deck_url text,
  payload jsonb not null default '{}'::jsonb
);

create table public.talent_pool (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text,
  resume_url text
);

create table public.meetings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  user_name text not null,
  user_email text not null,
  user_phone text,
  user_company text,
  user_notes text,
  event_type text not null,
  event_duration integer not null,
  event_description text,
  start_time timestamptz not null,
  end_time timestamptz not null,
  timezone text not null,
  status text not null default 'Scheduled' check (status in ('Scheduled', 'Rescheduled', 'Cancelled')),
  google_calendar_event_id text not null,
  meeting_link text not null
);

create index contacts_created_at_idx on public.contacts (created_at desc);
create index contacts_email_idx on public.contacts (email);
create index startup_partnerships_created_at_idx on public.startup_partnerships (created_at desc);
create index talent_pool_created_at_idx on public.talent_pool (created_at desc);
create index meetings_start_time_idx on public.meetings (start_time);
create index meetings_user_email_idx on public.meetings (user_email);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger meetings_set_updated_at
before update on public.meetings
for each row execute function public.set_updated_at();

alter table public.contacts enable row level security;
alter table public.startup_partnerships enable row level security;
alter table public.talent_pool enable row level security;
alter table public.meetings enable row level security;

revoke all on public.contacts, public.startup_partnerships, public.talent_pool, public.meetings from anon, authenticated;

-- Hardening flagged by the Supabase security advisor (pre-existing helper function).
revoke execute on function public.rls_auto_enable() from anon, authenticated, public;
