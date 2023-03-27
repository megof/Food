import { Router } from "express";
import * as ToppingController from '../controllers/topping.controller.js'

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Topping:
 *      type: Object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generate id 
 *        name:
 *          type: string
 *          description: the Topping name
 *        price:
 *          type: number
 *          description: the Topping price
 *        edo:
 *          type: boolean
 *          description: the Topping state
 *      required:
 *         - name
 *         - price 
 *      example:
 *        id: 641dd942c6d2032098f8c56e
 *        name: My topping
 *        price: 5000
 *        edo: false
 * 
*/

/**
 * @swagger
 * /api/v1/topping:
 *  get:
 *      summary: Return a Topping list
 *      responses:
 *          200:
 *              description: A list of toppings
 *              content:
 *                  application/json:
 *                      schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Topping'
 * 
 *          404: 
 *              description: A list of toppings
 */

router.get('/', ToppingController.getAll);

router.get('/:id', ToppingController.getOne);

router.post('/', ToppingController.save);

router.put('/:id', ToppingController.update);

router.delete('/:id', ToppingController.deleteOne);

export default router;