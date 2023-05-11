import { Router } from 'express';

import auth from './auth';
import quiz from './quiz';
import users from './users';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/quiz', quiz);

export default router;
