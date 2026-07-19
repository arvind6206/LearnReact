import { UserModel } from "../models/User.js"
import bcrypt from 'bcryptjs'
import * as z from 'zod'

export const signup = async(req, res) => {

    const registeredUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string()
        .min(6, "Password must be at least 6 characters")
        .refine((val) => /[A-Z]/.test(val), {
            message: "Password must contain at least one uppercase letter"
        })
        .refine((val) => /[0-9]/.test(val), {
            message: "Password must contain at least one number"
        })
        .refine((val) => /[@$!%*#?&]/.test(val), {
            message: "Password must contain at least one special character"
        })
})
    try {
        const result = registeredUserSchema.safeParse(req.body)
        if(!result.success){
            return res.status(400).json({
                msg: "Input Validation error",
                errors: result.error.issues
            })
        }

        const {name, email, password} = req.body

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