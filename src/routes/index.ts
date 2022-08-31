import { Router } from "express";
import productsRouter from './products-routers/products.routes';
import usersRouter from './Users-routers/user.routes';
import orderRouter from './order-routers/order.routes';
import orpro from './orderProducts-routers/orderProducts.routes'

const router = Router()
router.use('/api', productsRouter);
router.use('/api', usersRouter);
router.use('/api', orderRouter);
router.use('/api', orpro);

export default router;

/*uuid DEFAULT uuid_generate_v4()*/