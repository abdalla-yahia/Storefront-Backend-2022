import { Request, Response, NextFunction } from "express";
import OrderProducts from "../models/orderProducts.model";

const orPro = new OrderProducts()
//Create New OrderProducts
    const CreateOrderProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const createorderPro = await orPro.createOrderProducts(req.body)
        if ([createorderPro].length > 0) {

            res.json({
                state: "Order_Productes Created Successflly π",
                data: { ...createorderPro }
            })
        } else {
            res.json({
                message: "Sorry Not Found Any Thing π­"
            })
        }
    } catch (error) {
        next(error)
    }
}
//Get OrderProducts 
    const GetOrderProducts = async (req: Request, res: Response, next: NextFunction) => {
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
                message: "Sorry Not Found Any Thing π­"
            })
        }
    } catch (error) {
        next(error)
    }
}
//Delete OrderProducts 
    const DeleteOrderProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const delorderPro = await orPro.deleteOrderProducts(req.params.id)
        if ([...delorderPro].length > 0) {
            res.json({
                state: "Deleted OrderProducts Done Successfly π",
                data:{...delorderPro}
            })
        } else {
            res.json({
                message: "Sorry Not Found Any Thing To deleteπ­"
            })
        }
    } catch (error) {
        next(error)
    }
}
//Delete All OrderProducts
    const DeleteAllOrderProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const delorderPro = await orPro.deleteAllOrderProducts()
        res.json({
            state: "DELETE All OrderProducts Done Successflly π",
            data: { ...delorderPro }
        });
    } catch (error) {
        next(error)
    }
}

//Get All OrderProducts
    const GetAllOrderProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const getorderPro = await orPro.getAllOrderProducts()
        if ([...getorderPro].length > 0) {
            
            res.json({
                state: "Done",
                data: { ...getorderPro }
            });
        } else {
            res.json({
                message:'Not Found Any Thing in OrderProducts π·'
            })
        }
    } catch (error) {
        next(error)
    }
}

export default {
    GetAllOrderProducts,
    DeleteAllOrderProducts,
    DeleteOrderProducts,
    GetOrderProducts,
    CreateOrderProducts
}