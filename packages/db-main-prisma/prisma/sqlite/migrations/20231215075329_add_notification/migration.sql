-- AlterTable
ALTER TABLE "users" ADD COLUMN "notify_meta" TEXT;

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from_user" TEXT NOT NULL,
    "to_user" TEXT NOT NULL,
    "icon_meta" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "url_meta" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "notification_to_user_is_read_created_time_idx" ON "notification"("to_user", "is_read", "created_time");