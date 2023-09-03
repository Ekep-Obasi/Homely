import express from 'express';
import { CreateProperty, GetAllProperties, GetPropertyByID } from '../controllers/PropertyController';
import AuthMiddleware from '../middleware/AuthMiddleware';

const router = express.Router();

router.use(AuthMiddleware)
router.get('/', GetAllProperties);
router.get('/:id', GetPropertyByID)
router.post('/', CreateProperty);

export { router as PropertyRouter }