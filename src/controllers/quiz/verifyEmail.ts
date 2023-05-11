import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Quiz } from 'orm/entities/quiz/quiz';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.query.email;

  const quizRepository = getRepository(Quiz);

  try {
    const quiz = await quizRepository.findOne({
      select: ['id', 'email'],
      where: {
        email: email,
      },
    });
    if (!quiz) {
      const customError = new CustomError(404, 'General', `nenhum usuário com email:${email} encontrado.`, [
        'email não existe.',
      ]);
      return next(customError);
    }
    res.customSuccess(200, 'Email encontrado', quiz);
  } catch (error) {
    const customError = new CustomError(400, 'Raw', 'Error', null, error);
    return next(customError);
  }
};
