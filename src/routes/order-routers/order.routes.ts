import * as orderControl from '../../controllers/order.controllers';
import { Router } from 'express';
import AuthanticateMiddleware from '../../middlewares/Auth.midlwares';

const router = Router()


router.route('/order')
    .get(AuthanticateMiddleware,orderControl.default.GetAllOrders)
    .post(AuthanticateMiddleware, orderControl.default.CreateOrder)
    .delete(AuthanticateMiddleware,orderControl.default.DeleteOrder);
    
router.route('/order/:id')
    .get(AuthanticateMiddleware,orderControl.default.GetOrderOfUser)
    .delete(AuthanticateMiddleware,orderControl.default.DeleteSpecificOrder)
    .put(AuthanticateMiddleware,orderControl.default.UpdateSpecificOrder);


export default router;