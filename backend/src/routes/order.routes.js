import { Router } from "express";
import * as OrderController from '../controllers/order.controller.js'

const router = Router();

router.get('/', OrderController.getAll);

router.get('/:id', OrderController.getOne);

router.post('/', OrderController.save);

router.put('/:id', OrderController.update);

router.delete('/:id', OrderController.deleteOne);

export default router;