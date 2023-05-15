import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateQuizTable1612345678901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE quiz (
                "id" SERIAL PRIMARY KEY,
                "email" VARCHAR NOT NULL UNIQUE,
                "first_question" VARCHAR,
                "second_question" VARCHAR,
                "third_question" VARCHAR,
                "fourth_question" VARCHAR,
                "fifth_question" VARCHAR,
                "sixth_question" VARCHAR,
                "sixth_question_specify" VARCHAR,
                "seventh_question" VARCHAR,
                "seventh_question_specify" VARCHAR,
                "age" VARCHAR,
                "eighth_question" VARCHAR,
                "city_origin" VARCHAR,
                "ninth_question" VARCHAR,
                "tenth_question" VARCHAR,
                "tenth_question_other" VARCHAR,
                "eleventh_question" VARCHAR,
                "eleventh_question_specify" VARCHAR,
                "twelfth_question" VARCHAR,
                "pcd_type" VARCHAR,
                "thirteenth_question" VARCHAR,
                "thirteenth_question_specify" VARCHAR,
                "fourteenth_question" VARCHAR,
                "fifteenth_question" VARCHAR,
                "sixteenth_question" VARCHAR,
                "seventeenth_question" VARCHAR,
                "seventeenth_question_especify" VARCHAR,
                "eighteenth_question" VARCHAR,
                "nineteenth_question" VARCHAR,
                "twentieth_question" VARCHAR,
                "twentieth_question_other" VARCHAR,
                "twenty_first_question" VARCHAR,
                "twenty_first_question_other" VARCHAR,
                "twenty_second_question" VARCHAR,
                "twenty_third_question" VARCHAR,
                "twenty_fourth_question" VARCHAR,
                "twenty_fifth_question" VARCHAR,
                "twenty_sixth_question" VARCHAR,
                "twenty_seventh_question" VARCHAR,
                "twenty_eighth_question" VARCHAR,
                "twenty_ninth_question" VARCHAR,
                "thirtieth_question" VARCHAR,
                "created_at" TIMESTAMP DEFAULT NOW(),
                "updated_at" TIMESTAMP DEFAULT NOW()
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE quiz;
        `);
  }
}
