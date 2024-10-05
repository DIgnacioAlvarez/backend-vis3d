import { Router } from "express";
import { userRegisterHandler,userLoginHandler,changeUserInfoHandler,deleteUserHandler, getAllUsersHandler } from "../handlers/userHandlers";

export const usersRoutes = Router()

productRoutes.post("/register" , async (req,res) => await userRegisterHandler(req,res))
productRoutes.post("/login" , async (req,res) => await userLoginHandler(req,res))
productRoutes.put("/:id" , async (req,res) => await changeUserInfoHandler(req,res))
productRoutes.delete("/:id" , async (req,res) => await deleteUserHandler(req,res))
productRoutes.get("/" , async (req,res) => await getAllUsershandler(req,res))


