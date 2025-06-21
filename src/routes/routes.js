import express from "express"
import { Getuserprofilepicture, Loginuser, Usercontroller } from "../controllers/usercontroller.js"

const userrouter=express.Router()

userrouter.post("/user",Usercontroller)
userrouter.post("/user/login",Loginuser)
userrouter.get("/user/profile",Getuserprofilepicture)

export default userrouter