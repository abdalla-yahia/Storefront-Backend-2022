import { NextFunction,Request,Response } from "express";
import Error from "../types/Error.types";


const errmiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || "Opps .. Something went Wrong Please try again !!";
    
        res.status(status).json({ status, message });
    
}

export default errmiddleware; 