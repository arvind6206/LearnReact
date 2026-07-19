import { registeredUserSchema, UserModel } from "../models/User.js"
import bcrypt from 'bcryptjs'
import * as z from 'zod'
import jwt from 'jsonwebtoken'

export const signup = async(req, res) => {
   
    try {
        const result = registeredUserSchema.safeParse(req.body)
        if(!result.success){
            return res.status(400).json({
                msg: "Input Validation error",
                errors: result.error.issues
            })
        }

        const {name, email, password} = req.body

        const user = await  UserModel.findOne({email})
        if(user){
            return res.status(400).json({
                msg: "User already exist"
            })
        }

        if(!email || !password || !email){
            return res.status(400).json({
                msg: "All field are required"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 5)
        await UserModel.create({
            name,
            email, 
            password: hashedPassword
        })
        res.status(200).json({
            msg: "User signed up successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}

export const login = async(req, res) => {
    try {
        const {email, password} = req.body
        const foundUser = await UserModel.findOne({email})
        if(!foundUser){
            return res.status(400).json({
                msg: "User not found"
            })
        }
        const matched = await bcrypt.compare(password, foundUser.password)
        if(!matched){
            return res.status(400).json({
                msg: "Password does not match"
            })
        }
        const token = jwt.sign({
            id: foundUser._id
        }, process.env.JWT_SECRET)
        res.status(200).json({
            msg: "Login Successfully",
            token: token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}