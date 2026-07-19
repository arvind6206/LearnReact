import mongoose from 'mongoose'
import * as z from 'zod'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    }
},{timestamps: true})

export const UserModel = mongoose.model('User', userSchema)

 export const registeredUserSchema = z.object({
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