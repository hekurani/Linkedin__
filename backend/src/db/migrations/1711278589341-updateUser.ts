import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUser1711278589341 implements MigrationInterface {
    name = 'UpdateUser1711278589341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL`);
    }

}