-- DropForeignKey
ALTER TABLE "farmers" DROP CONSTRAINT "farmers_user_id_fkey";

-- AddForeignKey
ALTER TABLE "farmers" ADD CONSTRAINT "farmers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
