import { Router } from 'express';

import { register } from 'controllers/quiz';
import { reports } from 'controllers/quiz/reports';
import { verifyEmail } from 'controllers/quiz/verifyEmail';
import { checkJwt } from 'middleware/checkJwt';

const router = Router();

router.post('/', register);
router.get('/verify-email', verifyEmail);
router.get('/reports', [checkJwt], reports);

export default router;
