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
            state: "Success",
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
                state: "Success",
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
        const UpUser = await user.updateteUser(req.body)
        res.json({
            state: "Success",
            data:{...UpUser}
        })
    } catch (error) {
        next(error)
    }
}
//Delete User
export const DeleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const DelUser = await user.deleteUser(req.params)
        res.json({
            state: "Success Deleted user",
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
            state: "Success Deleted user",
            data:{...DelAllUser}
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