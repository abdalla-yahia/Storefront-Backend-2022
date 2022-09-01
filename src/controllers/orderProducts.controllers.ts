import { Request, Response, NextFunction } from "express";
import OrderProducts from "../models/orderProducts.model";

const orPro = new OrderProducts()

export const CreateOrderProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const createorderPro = await orPro.createOrderProducts(req.body)
        if ([...createorderPro].length > 0) {

            res.json({
                state: "Order_Productes Created Successflly 😄",
                data: { ...createorderPro }
            })
        } else {
            res.json({
                message: "Sorry Not Found Any Thing 😭"
            })
        }
    } catch (error) {
        next(error)
    }
}
export const GetOrderProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getorderPro = await orPro.getOrderProducts()
        if ([...getorderPro].length > 0) {
            const data = { ...getorderPro }
            const fdata = { ...data[1],...data[0]}
            res.json({
                state: "Done",
                d:fdata
            })
        } else {
            res.json({
                message: "Sorry Not Found Any Thing 😭"
            })
        }
    } catch (error) {
        next(error)
    }
}
export const GetAllOrderProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const getorderPro = await orPro.getAllOrderProducts()
        if ([...getorderPro].length > 0) {

            res.json({
                state: "Done",
                data: { ...getorderPro }
            })
        } else {
            res.json({
                message: "Sorry Not Found Any Thing 😭"
            })
        }
    } catch (error) {
        next(error)
    }
}
export const DeleteAllOrderProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const delorderPro = await orPro.deleteAllOrderProducts()
        res.json({
            state: "Done",
            data: { ...delorderPro }
        });
    } catch (error) {
        next(error)
    }
}