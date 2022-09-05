import { Request, Response, NextFunction} from "express";
import UsersModels from "../models/user.models";
import jwt from "jsonwebtoken";
import config from '../configration';


//${newuser[0].firstname} ${newuser[0].lastname}
const user = new UsersModels()
//Create A New User
export const CreateNewUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newuser = await user.createUser(req.body)
        res.json({
            state: `Good Job Creating Anew User Called ${newuser.firstname} ${newuser.lastname}`,
            data:{...newuser}
        })
    } catch (error) {
        next(error)
    }
}
//Get All Users
export const GetAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getallusers = await user.getAllUsers()
        const size =[...getallusers].length;
        if (size > 0) {
            res.json({
                state: "They Are All Users Found 😊",
                data:{...getallusers}
            })
        } else {
            res.json({
                message: 'Oops...!!NOT Found Any User 😭'
            })
        }
    } catch (error) {
        next(error)
    }
}
//Update User
export const UpdateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const UpUser = await user.updateteUser(req.body, req.params.id)
        res.json({
            state: `Good Jop ..Update User ${UpUser.firstname} ${UpUser.lastname} Done. 👍`,
            data:{...UpUser}
        })
    } catch (error) {
        next(error)
    }
}
//Get User By Id
export const GeteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const GetUser = await user.geteUser(req.params.id)
        if ([...GetUser].length > 0) {
            
            res.json({
                state: `Successflly Gitting user ${GetUser[0].firstname} ${GetUser[0].lastname} 😀`,
                data:{...GetUser}
            })
        } else {
            res.json({
                message:"Not Found Any User Match This ID 🙂"
            })
        }
    } catch (error) {
        next(error)
    }
}
//Delete User
export const DeleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const DelUser = await user.deleteUser(req.params.id)
        res.json({
            state: `Success Deleted user ${DelUser[0].firstname} ${DelUser[0].lastname} 😀`,
            data:{...DelUser}
        })
    } catch (error) {
        next(error)
    }
}
//Delete All User
export const DeleteAllUser = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const DelAllUser = await user.deleteAllUser()
        res.json({
            state: "All Users Deleted Successfully 😊",
            data:{...DelAllUser}
        })
    } catch (error) {
        next(error)
    }
}
//Authantication User
export const AuthanticateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, email } =req.body
        const auth = await user.AuthanticateUsers(password, email)
        const token = jwt.sign(auth, config.token as string)
        if (!auth) {
            res.json({
                message:"Not Valid User"
            })
        } else {
            res.json({
                state: "Success Token user",
                data:{...auth,token}
            })
        }
    } catch (error) {
        next(error)
    }
}