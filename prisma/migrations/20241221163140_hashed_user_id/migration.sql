/*
  Warnings:

  - A unique constraint covering the columns `[hashedUserId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hashedUserId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- Activate pgcrypto extension to use gen_random_uuid
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Add hashedUserId column with default value
ALTER TABLE "User" ADD COLUMN "hashedUserId" UUID DEFAULT gen_random_uuid() NOT NULL;

-- Create unique index for hashedUserId
CREATE UNIQUE INDEX "User_hashedUserId_key" ON "User"("hashedUserId");