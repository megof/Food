import { Router } from "express";
import * as ProductController from '../controllers/product.controller.js'

const router = Router();

router.get('/', ProductController.getAll);

router.get('/:id', ProductController.getOne);

router.post('/', ProductController.save);

router.put('/:id', ProductController.update);

router.delete('/:id', ProductController.deleteOne);

export default router;