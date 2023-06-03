-- DropIndex
DROP INDEX `sheets_language_id_fkey` ON `sheets`;

-- AlterTable
ALTER TABLE `sheets` ADD COLUMN `user_id` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `sheets` ADD CONSTRAINT `sheets_language_id_fkey` FOREIGN KEY (`language_id`) REFERENCES `languages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sheets` ADD CONSTRAINT `sheets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
