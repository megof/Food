import { Router } from "express";
import * as DetailTopping from '../controllers/detailTopping.controller.js'

const router = Router();

router.get('/', DetailTopping.getAll);

router.get('/:id', DetailTopping.getOne);

router.post('/', DetailTopping.save);

router.put('/:id', DetailTopping.update);

router.delete('/:id', DetailTopping.deleteOne);

export default router;