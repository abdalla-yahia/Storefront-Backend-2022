import { Request, Response, NextFunction } from 'express';
import Error from "../types/Error.types";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errmiddleware = async (err:Error, req: Request, res: Response , next : NextFunction) => {
    const state = err.state || 500;
    const message = err.message || "Oops.. something went wrong. Please make sure this path exists 🙄!!";
    res.status(state).json({ state, message })
}

export default errmiddleware; 