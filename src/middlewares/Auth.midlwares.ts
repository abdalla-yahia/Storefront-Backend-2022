import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import Error from '../types/Error.types';
import config from '../configration';


const errHandelling = (next: NextFunction) => {
    const err: Error = new Error('Sorry Your UserName Or Password is Not Valid to Login  And Use This Service');
    err.status = 401
    return next(err)
}
const AuthanticateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth = req.get('Authorization');
        const Barer = auth?.split(" ")[0]
        const token = auth?.split(" ")[1]
        if (token && Barer === "Bearer") {
            const returnjwt =jwt.verify(token, config.token as string) 
            if (returnjwt) {
                next()
            } else {
                errHandelling(next);
            }
        } else {
            errHandelling(next)
        }
    } catch (error) {
        errHandelling(next)
    }
}
export default AuthanticateMiddleware;