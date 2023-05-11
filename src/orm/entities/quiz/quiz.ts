import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('quiz')
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstQuestion: string;

  @Column()
  secondQuestion: string;

  @Column()
  thirdQuestion: string;

  @Column()
  fourthQuestion: string;

  @Column()
  fifthQuestion: string;

  @Column()
  sixthQuestion: string;

  @Column()
  sixthQuestionSpecify: string;

  @Column()
  seventhQuestion: string;

  @Column()
  seventhQuestionSpecify: string;

  @Column()
  age: string;

  @Column()
  eighthQuestion: string;

  @Column()
  cityOrigin: string;

  @Column()
  ninthQuestion: string;

  @Column()
  tenthQuestion: string;

  @Column()
  tenthQuestionOther: string;

  @Column()
  eleventhQuestion: string;

  @Column()
  eleventhQuestionSpecify: string;

  @Column()
  twelfthQuestion: string;

  @Column()
  pcdType: string;

  @Column()
  thirteenthQuestion: string;

  @Column()
  thirteenthQuestionSpecify: string;

  @Column()
  fourteenthQuestion: string;

  @Column()
  fifteenthQuestion: string;

  @Column()
  sixteenthQuestion: string;

  @Column()
  seventeenthQuestion: string;

  @Column()
  seventeenthQuestionEspecify: string;

  @Column()
  eighteenthQuestion: string;

  @Column()
  nineteenthQuestion: string;

  @Column()
  twentiethQuestion: string;

  @Column()
  twenty_firstQuestion: string;

  @Column()
  twenty_secondQuestion: string;

  @Column()
  twenty_thirdQuestion: string;

  @Column()
  twenty_fourthQuestion: string;

  @Column()
  twenty_fifthQuestion: string;

  @Column()
  twenty_sixthQuestion: string;

  @Column()
  twenty_seventhQuestion: string;

  @Column()
  twenty_eighthQuestion: string;

  @Column()
  twenty_ninthQuestion: string;

  @Column()
  thirtiethQuestion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
