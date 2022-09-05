import * as orderControl from '../../controllers/order.controllers';
import { Router } from 'express';
import AuthanticateMiddleware from '../../middlewares/Auth.midlwares';

const router = Router()


router.route('/order').get(orderControl.GetAllOrders).post(AuthanticateMiddleware ,orderControl.CreateOrder).delete(orderControl.DeleteOrder);
router.route('/order/:id').get(orderControl.GetOrderOfUser).delete(orderControl.DeleteSpecificOrder).put(orderControl.UpdateSpecificOrder);


export default router;