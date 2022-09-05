import { Request, Response, NextFunction } from 'express';
import config from '../configration';
import jwt from 'jsonwebtoken';

const AuthanticateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth = req.get('Authorization');
        const token = auth?.split(" ")[1]
        const returnjwt = jwt.verify(token as string, config.token as string)
        if (returnjwt) {
            next()
        } else {
            res.json({
                message: 'Sorry Your Email Or Password Is Not Valied 😶'
            });
        }
    } catch (error) {
        res.json({
                message: 'Sorry Your Email Or Password Is Not Valied 😶'
            });
    }
}
export default AuthanticateMiddleware;