import { Router, Request, Response, NextFunction } from "express";
import UsersModels from "../models/user.models";
import users from "../types/user.types";
import jwt from "jsonwebtoken";
import config from '../configration';


const user = new UsersModels()
//Create A New User
export const CreateNewUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newuser = await user.createUser(req.body)
        res.json({
            state: "Well Done Creating A New User Done Perfectly 😍",
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
            state: "Good Jop ..Update User Done. 👍",
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
                state: "Successflly Gitting user 😀",
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
            state: "Success Deleted user 😀",
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
        })
    } catch (error) {
        next(error)
    }
}
//Authantication User
export const AuthanticateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, firstName } =req.body
        const auth = await user.AuthanticateUsers(password, firstName)
        const token = jwt.sign(auth, config.token as string)
        if (!auth) {
            res.json({
                message:"Not Valid User"
            })
        }
        res.json({
            state: "Success Deleted user",
            data:{...auth,token}
        })
    } catch (error) {
        next(error)
    }
}