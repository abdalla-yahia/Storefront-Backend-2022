import {Request, Response, NextFunction } from 'express';
import productsModel from '../models/products.models';



const pro =new productsModel()

//Creat A New Product
export const CreatProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newProduct = await pro.creatProduct(req.body);
        res.json({
            status: "Success To Create New Product 😄",
            data:{...newProduct}
        })
        
    } catch (error) {
        next(error)
    }
}

// Get All Products 
export const GetAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getAllPro = await pro.getAllProduct()
        const size = Object.keys(getAllPro as object).length;
        if (size > 0) {
            
            res.json({
                state: "Success",
                data:{...getAllPro}
            })
        } else {
            res.json({
                message:"Opps..Not Found Any Product 😥"
            })
        }
    } catch (error) {
        next(error)
    }
}

// Get Specific Product 
export const GetSpecificProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getPro = await pro.getSpecificProduct(req.params.id)
        if ([getPro].length > 0) {
            res.json({
                data:{...getPro}
            })
        } else {
            res.json({
                message:"No Elements Found 🙂"
            })
        }
    } catch (error) {
        next(error)
    }
}
// DELETE Specific Product 
export const DeleteSpecificProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const delPro = await pro.deleteSpecificProduct(req.params.id)
            res.json({
                state:"Success ",
                message: "Deleted Operation Successflly 🙂",
                data:{...delPro}
            })
    } catch (error) {
        next(error)
    }
}
// DELETE All Product 
export const DeleteAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const delAllPro = await pro.deleteAllProducts()
        res.json({
            state: "Success ",
            message: "Deleted Operation Successflly 🙂",
            data:{...delAllPro}
        })
    } catch (error) {
        next(error)
    }
}

// Update Specific Product 
export const UpdateSpecificProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updateProduct = await pro.updatespecificProduct(req.body,req.params.id)
            res.json({
                state:"Success ",
                message: "Updated Operation Successflly 🙂",
                data:{...updateProduct}
            })
    } catch (error) {
        next(error)
    }
}
// Sort  Products 
export const SortProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sortProduct = await pro.sortProducts(req.body.category)
            res.json({
                state:"Success ",
                message: "Sorting Operation Successflly 🙂",
                data:{...sortProduct}
            })
    } catch (error) {
        next(error)
    }
}