import OrdersModels from "../models/order.models";
import {  Request, Response, NextFunction } from "express";
import order from '../types/Order.types';

const order = new OrdersModels()
//Create New Order
    const CreateOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getorder = await order.createOrder(req.body)
            res.json({
                state: `This Is The Order Of User With Id =${req.body.user_id}`,
                data:{...getorder}
            })
        
    } catch (error) {
        next(error)
    }
}
//Get Specific orders of Specific User
    const GetOrderOfUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getorder = await order.getOrderOfUser(req.params.id as string)
        if ([getorder].length > 0) {
            
            res.json({
                state: `This Is The Order Of User `,
                data:{...getorder}
            })
        } else {
            res.json({
                message:"Sorry Not Found Id Try Again 🙂"
            })
        }
        
    } catch (error) {
        next(error)
    }
}
//Delete All order of All Users
    const DeleteOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const delorder = await order.deleteOrder()
            res.json({
                state: `Delete Order Done.. `,
                data:{...delorder}
            })
        
    } catch (error) {
        next(error)
    }
}
//Get All Orders
    const GetAllOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getAllorder = await order.getAllOrder()
        if ([...getAllorder].length > 0) {
            
            res.json({
                state: `This is all orders.. `,
                data:{...getAllorder}
            })
        } else {
            res.json({
                message:"Not Found Any Orders 🙃"
            })
        }
        
    } catch (error) {
        next(error)
    }
}
//Delete Specific Order by its id
    const DeleteSpecificOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const delSporder = await order.deleteSpecificOrder(req.params.id)
        if ([...delSporder].length > 0) {
            
            res.json({
                state: `Delete Order Succsseflly 😅 `,
                data:{...delSporder}
            })
        } else {
            res.json({
                message:"Not Found Any Orders Match this id 🙃"
            })
        }
        
    } catch (error) {
        next(error)
    }
}
//Update Specific Order by its id
    const UpdateSpecificOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Updateorder = await order.updateSpecificOrder(req.body,req.params.id)
        if (req.body.order_status == "open") {
            
            res.json({
                state: `Great Jop Update Order Successflly 😻`,
                data:{...Updateorder}
            })
        } else {
            res.json({
                message:"Sorry Time Out to Update This Order 🙃"
            })
        }
        
    } catch (error) {
        next(error)
    }
}

export default {
    UpdateSpecificOrder,
    DeleteSpecificOrder,
    GetAllOrders,
    DeleteOrder,
    GetOrderOfUser,
    CreateOrder
}