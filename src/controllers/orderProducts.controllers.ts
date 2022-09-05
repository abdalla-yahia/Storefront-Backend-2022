import { Request, Response, NextFunction } from "express";
import OrderProducts from "../models/orderProducts.model";

const orPro = new OrderProducts()
//Create New OrderProducts
export const CreateOrderProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const createorderPro = await orPro.createOrderProducts(req.body)
        if ([createorderPro].length > 0) {

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
//Get OrderProducts 
export const GetOrderProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getorderPro = await orPro.getOrderProducts(req.params.id)
        if ([...getorderPro].length > 0) {
            const data = { ...getorderPro }
            const fdata = { ...data[1], ...data[0]}
            res.json({
                state: "Done",
                data: { ...fdata }
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
//Delete OrderProducts 
export const DeleteOrderProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const delorderPro = await orPro.deleteOrderProducts(req.params.id)
        if ([...delorderPro].length > 0) {
            res.json({
                state: "Deleted OrderProducts Done Successfly 👍",
                data:{...delorderPro}
            })
        } else {
            res.json({
                message: "Sorry Not Found Any Thing To delete😭"
            })
        }
    } catch (error) {
        next(error)
    }
}
//Delete All OrderProducts
export const DeleteAllOrderProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const delorderPro = await orPro.deleteAllOrderProducts()
        res.json({
            state: "DELETE All OrderProducts Done Successflly 😆",
            data: { ...delorderPro }
        });
    } catch (error) {
        next(error)
    }
}

//Get All OrderProducts
export const GetAllOrderProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const getorderPro = await orPro.getAllOrderProducts()
        if ([...getorderPro].length > 0) {
            
            res.json({
                state: "Done",
                data: { ...getorderPro }
            });
        } else {
            res.json({
                message:'Not Found Any Thing in OrderProducts 😷'
            })
        }
    } catch (error) {
        next(error)
    }
}