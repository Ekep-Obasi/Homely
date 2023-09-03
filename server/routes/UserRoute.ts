import express from 'express';
import { CreateUser, EditUserProfile, GetAllUsers, GetUserID, GetUserProfile, UserLogin } from '../controllers';
import AuthMiddleware from '../middleware/AuthMiddleware';

const router = express.Router();

router.post('/login', UserLogin);
router.post('/', CreateUser);

router.use(AuthMiddleware);
router.get('/profile', GetUserProfile);
router.patch('/profile', EditUserProfile)
router.get('/', GetAllUsers);
router.get('/:id', GetUserID);






export { router as UserRouter };