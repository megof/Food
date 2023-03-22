import { Router } from "express";
import * as ProductTypeController from '../controllers/productType.controller.js'

const router = Router();

router.get('/', ProductTypeController.getAll);

router.get('/:id', ProductTypeController.getOne);

router.post('/', ProductTypeController.save);

router.put('/:id', ProductTypeController.update);

router.delete('/:id', ProductTypeController.deleteOne);

export default router;