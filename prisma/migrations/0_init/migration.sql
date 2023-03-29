-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(55) NOT NULL,
    `password` VARCHAR(512) NOT NULL,
    `name` VARCHAR(55) NOT NULL,
    `role` VARCHAR(55) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

