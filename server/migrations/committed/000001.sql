--! Previous: -
--! Hash: sha1:f1e4f28e0e16c20be78035f181d4849d1f4bbcdd

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS project;

CREATE TABLE project (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  name text
);

CREATE TABLE post (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  project_id uuid,
  title text,
  comment text
);

CREATE INDEX IF NOT EXISTS post_project_id_idx ON post (project_id);
