/*
  Warnings:

  - Added the required column `like` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `like` INTEGER NOT NULL,
    ADD COLUMN `published` BOOLEAN NOT NULL;
