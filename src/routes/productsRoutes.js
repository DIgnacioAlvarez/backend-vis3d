import { Router } from "express";
import {getAllProducts,postProductHandler,getProductByIdHandler,changeProductHandler} from '../handlers/productsHandler.js'


export const productRoutes = Router()

productRoutes.get("/:id", async (req,res) => await getProductByIdHandler(req,res) )
productRoutes.get("/",  async (req,res) => await getAllProducts(req,res))
productRoutes.post("/", async (req,res) => await postProductHandler(req,res) )
productRoutes.put("/", async (req,res) => await changeProductHandler(req,res) )

