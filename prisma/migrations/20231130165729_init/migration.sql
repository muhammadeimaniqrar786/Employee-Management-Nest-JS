-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Employee_username_key`(`username`),
    UNIQUE INDEX `Employee_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeTasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `start` DATETIME(3) NULL,
    `end` DATETIME(3) NULL,
    `employee_id` INTEGER NOT NULL,
    `assigner_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskGallery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `media` VARCHAR(191) NOT NULL,
    `task_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EmployeeTasks` ADD CONSTRAINT `EmployeeTasks_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeTasks` ADD CONSTRAINT `EmployeeTasks_assigner_id_fkey` FOREIGN KEY (`assigner_id`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskGallery` ADD CONSTRAINT `TaskGallery_task_id_fkey` FOREIGN KEY (`task_id`) REFERENCES `EmployeeTasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
