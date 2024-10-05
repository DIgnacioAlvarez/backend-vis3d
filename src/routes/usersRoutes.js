import { Router } from "express";
import { userRegisterHandler,userLoginHandler,changeUserInfoHandler,deleteUserHandler, getAllUsersHandler } from "../handlers/userHandlers.js";

export const usersRoutes = Router()

usersRoutes.post("/register" , async (req,res) => await userRegisterHandler(req,res))
usersRoutes.post("/login" , async (req,res) => await userLoginHandler(req,res))
usersRoutes.put("/:id" , async (req,res) => await changeUserInfoHandler(req,res))
usersRoutes.delete("/:id" , async (req,res) => await deleteUserHandler(req,res))
usersRoutes.get("/" , async (req,res) => await getAllUsersHandler(req,res))


