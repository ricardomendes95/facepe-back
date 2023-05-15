import { Request, Response, NextFunction } from 'express';
import { Repository, getRepository } from 'typeorm';

import { Quiz } from 'orm/entities/quiz/quiz';
import {
  eighteenthQuestionOptions,
  eleventhQuestionOptions,
  firstQuestionOptions,
  fourteenthQuestionOptions,
  fourthQuestionOptions,
  nineteenthQuestionOptions,
  ninthQuestionOptions,
  secondQuestionOptions,
  seventeenthQuestionOptions,
  seventhQuestionOptions,
  sixteenthQuestionOptions,
  sixthQuestionOptions,
  tenthQuestionOptions,
  twentyOneQuestionOptions,
  twentyQuestionOptions,
  twentyTwoQuestionOptions,
} from 'utils/listQuestions';
import { CustomError } from 'utils/response/custom-error/CustomError';
export const reports = async (req: Request, res: Response, next: NextFunction) => {
  const quizRepository = getRepository(Quiz);

  try {
    const firstQuestion = await buildQuizQuery(quizRepository, firstQuestionOptions, 'first_question');
    const secondQuestion = await buildQuizQuery(quizRepository, secondQuestionOptions, 'second_question');
    const fourthQuestion = await buildQuizQuery(quizRepository, fourthQuestionOptions, 'fourth_question');
    const sixthQuestion = await buildQuizQuery(quizRepository, sixthQuestionOptions, 'sixth_question');
    const seventhQuestion = await buildQuizQuery(quizRepository, seventhQuestionOptions, 'seventh_question');
    const ninthQuestion = await buildQuizQuery(quizRepository, ninthQuestionOptions, 'ninth_question');
    const tenthQuestion = await buildQuizQuery(quizRepository, tenthQuestionOptions, 'tenth_question');
    const eleventhQuestion = await buildQuizQuery(quizRepository, eleventhQuestionOptions, 'eleventh_question');
    const fourteenthQuestion = await buildQuizQuery(quizRepository, fourteenthQuestionOptions, 'fourteenth_question');
    const fifteenthQuestion = await buildQuizQuery(quizRepository, fourteenthQuestionOptions, 'fifteenth_question');
    const sixteenthQuestion = await buildQuizQuery(quizRepository, sixteenthQuestionOptions, 'sixteenth_question');
    const seventeenthQuestion = await buildQuizQuery(
      quizRepository,
      seventeenthQuestionOptions,
      'seventeenth_question',
    );
    const eighteenthQuestion = await buildQuizQuery(quizRepository, eighteenthQuestionOptions, 'eighteenth_question');
    const nineteenthQuestion = await buildQuizQuery(quizRepository, nineteenthQuestionOptions, 'nineteenth_question');
    const twentyQuestion = await buildQuizQuery(quizRepository, twentyQuestionOptions, 'twentieth_question');
    const twentyOneQuestion = await buildQuizQuery(quizRepository, twentyOneQuestionOptions, 'twenty_first_question');
    const twentyTwoQuestion = await buildQuizQuery(quizRepository, twentyTwoQuestionOptions, 'twenty_second_question');
    const allResults = await quizRepository.find();

    const result = {
      firstQuestion,
      secondQuestion,
      fourthQuestion,
      sixthQuestion,
      seventhQuestion,
      ninthQuestion,
      tenthQuestion,
      eleventhQuestion,
      fourteenthQuestion,
      fifteenthQuestion,
      sixteenthQuestion,
      seventeenthQuestion,
      eighteenthQuestion,
      nineteenthQuestion,
      twentyQuestion,
      twentyOneQuestion,
      twentyTwoQuestion,
      allResults,
    };

    res.customSuccess(200, 'Reports', result);
  } catch (error) {
    const customError = new CustomError(400, 'Raw', 'Error', null, error);
    return next(customError);
  }
};

function buildQuizQuery(quizRepository: Repository<Quiz>, options: string[], columnName: string) {
  const selectStrings = options.map((option, index) => {
    const optionName = `option_${index}`;
    return `SUM(CASE WHEN ${columnName} = :${optionName} THEN 1 ELSE 0 END) as ${columnName}_${index}`;
  });

  const whereOptions = options.map((option, index) => {
    return `${option}`;
  });

  const query = quizRepository
    .createQueryBuilder()
    .select(selectStrings.concat(selectStrings.join(', ')))
    .where(`${columnName} IN (:...options)`, { options: whereOptions });

  const params = {};
  options.map((option, index) => {
    const optionName = `option_${index}`;
    params[optionName] = option;
    return params;
  }, {});

  return query.setParameters(params).getRawOne();
}
