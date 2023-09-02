import express from 'express';
import { CreateUser, GetAllUsers, GetUserID, UserLogin } from '../controllers';

const router = express.Router();

router.get('/', GetAllUsers);
router.get('/:id', GetUserID);
router.post('/', CreateUser);
router.post('/login', UserLogin);

export {router as UserRouter};