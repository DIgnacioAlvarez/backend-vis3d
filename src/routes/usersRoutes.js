import { Router } from "express";
import { userRegisterHandler,userLoginHandler,changeUserInfoHandler,deleteUserHandler, getAllUsersHandler,updateWishlistHandler } from "../handlers/userHandlers.js";

export const usersRoutes = Router()
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Crea un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - userName
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Crea un usuario
 */
usersRoutes.post("/register" , async (req,res) => await userRegisterHandler(req,res))

usersRoutes.post("/login" , async (req,res) => await userLoginHandler(req,res))
usersRoutes.put("/wishlist",async(req,res) => await updateWishlistHandler(req,res))

usersRoutes.put("/:id" , async (req,res) => await changeUserInfoHandler(req,res))
usersRoutes.delete("/:id" , async (req,res) => await deleteUserHandler(req,res))
usersRoutes.get("/" , async (req,res) => await getAllUsersHandler(req,res))


