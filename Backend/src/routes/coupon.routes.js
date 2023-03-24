import { Router } from "express";
import * as Coupon from '../controllers/coupon.controller.js'

const router = Router();

router.get('/', Coupon.getAll);

router.get('/:id', Coupon.getOne);

router.post('/', Coupon.save);

router.put('/:id', Coupon.update);

router.delete('/:id', Coupon.deleteOne);

export default router;