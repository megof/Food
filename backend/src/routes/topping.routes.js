import { Router } from "express";
import * as ToppingController from '../controllers/topping.controller.js'

const router = Router();

router.get('/', ToppingController.getAll);

router.get('/:id', ToppingController.getOne);

router.post('/', ToppingController.save);

router.put('/:id', ToppingController.update);

router.delete('/:id', ToppingController.deleteOne);

export default router;