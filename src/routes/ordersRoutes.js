import { Router } from "express";
import {createOrderHandler,getAllOrdersHandler} from "../handlers/ordersHandlers.js"


export const ordersRoutes = Router()

ordersRoutes.post("/",async (req,res) => await createOrderHandler(req,res))
ordersRoutes.get("/:id",async (req,res) => await getAllOrdersHandler(req,res))
ordersRoutes.get("/",async (req,res) => await getAllOrdersHandler(req,res))

