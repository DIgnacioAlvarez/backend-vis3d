import { Router } from "express";
import {createOrderHandler,getAllOrdersHandler,getOrderByUserIdHandler,changeOrderStatusByIdHandler,searchOrderByIdHandler,deleteOrderByIdHandler} from "../handlers/ordersHandlers.js"


export const ordersRoutes = Router()

ordersRoutes.post("/",async (req,res) => await createOrderHandler(req,res))
ordersRoutes.get("/order/:orderId",async (req,res) => await searchOrderByIdHandler(req,res))
ordersRoutes.get("/user/:id",async (req,res) => await getOrderByUserIdHandler(req,res))
ordersRoutes.delete("/:id",async (req,res) => await deleteOrderByIdHandler(req,res))
ordersRoutes.get("/",async (req,res) => await getAllOrdersHandler(req,res))
ordersRoutes.put("/:id",async (req,res) => await changeOrderStatusByIdHandler(req,res))

