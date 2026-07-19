import { UserModel } from "../models/User.js"

export const signup = async(req, res) => {
    try {
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