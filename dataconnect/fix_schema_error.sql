-- This script resolves the migration error by dropping the 'user' table and its dependencies.
-- The Data Connect service will automatically recreate the 'user' table with the correct schema.
-- WARNING: This will delete all data in the 'user' table and any related tables (document, template, etc.)

DROP TABLE IF EXISTS "public"."user" CASCADE;
