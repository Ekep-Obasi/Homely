import express from 'express';
import { CreateProperty, GetAllProperties, GetPropertyByID } from '../controllers/PropertyController';

const router = express.Router();

router.get('/', GetAllProperties);
router.get('/:id', GetPropertyByID)
router.post('/', CreateProperty);

export { router as PropertyRouter }