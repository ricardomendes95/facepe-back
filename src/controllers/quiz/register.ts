import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Quiz } from 'orm/entities/quiz/quiz';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const quizRepository = getRepository(Quiz);
  try {
    const quiz = await quizRepository.findOne({ where: { email: data.email } });
    if (quiz) {
      const customError = new CustomError(400, 'General', 'E-mail já foi usado!', [
        `O E-mail '${data.email}' já foi usado!`,
      ]);
      return next(customError);
    }
    try {
      const newQuiz = new Quiz();
      newQuiz.email = data.email;
      newQuiz.firstQuestion = data.firstQuestion;
      newQuiz.secondQuestion = data.secondQuestion;
      newQuiz.thirdQuestion = data.thirdQuestion;
      newQuiz.fourthQuestion = data.fourthQuestion;
      newQuiz.fifthQuestion = data.fifthQuestion;
      newQuiz.sixthQuestion = data.sixthQuestion;
      newQuiz.sixthQuestionSpecify = data.sixthQuestionSpecify;
      newQuiz.seventhQuestion = data.seventhQuestion;
      newQuiz.seventhQuestionSpecify = data.seventhQuestionSpecify;
      newQuiz.age = data.age;
      newQuiz.eighthQuestion = data.eighthQuestion;
      newQuiz.cityOrigin = data.cityOrigin;
      newQuiz.ninthQuestion = data.ninthQuestion;
      newQuiz.tenthQuestion = data.tenthQuestion;
      newQuiz.tenthQuestionOther = data.tenthQuestionOther;
      newQuiz.eleventhQuestion = data.eleventhQuestion;
      newQuiz.eleventhQuestionSpecify = data.eleventhQuestionSpecify;
      newQuiz.twelfthQuestion = data.twelfthQuestion;
      newQuiz.pcdType = data.pcdType;
      newQuiz.thirteenthQuestion = data.thirteenthQuestion;
      newQuiz.thirteenthQuestionSpecify = data.thirteenthQuestionSpecify;
      newQuiz.fourteenthQuestion = data.fourteenthQuestion;
      newQuiz.fifteenthQuestion = data.fifteenthQuestion;
      newQuiz.sixteenthQuestion = data.sixteenthQuestion;
      newQuiz.seventeenthQuestion = data.seventeenthQuestion;
      newQuiz.seventeenthQuestionEspecify = data.seventeenthQuestionEspecify;
      newQuiz.eighteenthQuestion = data.eighteenthQuestion;
      newQuiz.nineteenthQuestion = data.nineteenthQuestion;
      newQuiz.twentiethQuestion = data.twentiethQuestion;
      newQuiz.twenty_firstQuestion = data.twenty_firstQuestion;
      newQuiz.twenty_secondQuestion = data.twenty_secondQuestion;
      newQuiz.twenty_thirdQuestion = data.twenty_thirdQuestion;
      newQuiz.twenty_fourthQuestion = data.twenty_fourthQuestion;
      newQuiz.twenty_fifthQuestion = data.twenty_fifthQuestion;
      newQuiz.twenty_sixthQuestion = data.twenty_sixthQuestion;
      newQuiz.twenty_seventhQuestion = data.twenty_seventhQuestion;
      newQuiz.twenty_eighthQuestion = data.twenty_eighthQuestion;
      newQuiz.twenty_ninthQuestion = data.twenty_ninthQuestion;
      newQuiz.thirtiethQuestion = data.thirtiethQuestion;

      await quizRepository.save(newQuiz);
      res.customSuccess(200, 'Formulário enviando com sucesso!');
    } catch (err) {
      const customError = new CustomError(400, 'Raw', `Formulário não foi criado!`, null, err);
      return next(customError);
    }
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Formulário não foi criado!`, null, err);
    return next(customError);
  }
};
