import { Router } from "express";
import {createOrderHandler,getAllOrdersHandler,getOrderByUserIdHandler} from "../handlers/ordersHandlers.js"


export const ordersRoutes = Router()

ordersRoutes.post("/",async (req,res) => await createOrderHandler(req,res))
ordersRoutes.get("/:id",async (req,res) => await getOrderByUserIdHandler(req,res))
// ordersRoutes.delete("/:id",async (req,res) => await getOrderByUserIdHandler(req,res))
ordersRoutes.get("/",async (req,res) => await getAllOrdersHandler(req,res))

