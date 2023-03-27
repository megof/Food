import { Router } from "express";
import * as ToppingProductController from '../controllers/toppingProduct.controller.js'

const router = Router();

router.get('/', ToppingProductController.getAll);

router.get('/:id', ToppingProductController.getOne);

router.post('/', ToppingProductController.save);

router.put('/:id', ToppingProductController.update);

router.delete('/:id', ToppingProductController.deleteOne);

export default router;