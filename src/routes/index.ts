import { Router, Request, Response, NextFunction } from "express";
import productsRouter from './products-routers/products.routes';
import usersRouter from './Users-routers/user.routes';

const router = Router()
router.use('/api', productsRouter);
router.use('/api', usersRouter);


export default router;