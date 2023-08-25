-- AlterTable
ALTER TABLE `accounts` MODIFY `refresh_token` TEXT NULL,
    MODIFY `access_token` TEXT NULL;

-- AlterTable
ALTER TABLE `books` MODIFY `summary` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `ratings` MODIFY `description` TEXT NOT NULL;
