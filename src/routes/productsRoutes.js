import { Router } from "express";
import {getAllProducts,postProductHandler,getProductByIdHandler,} from '../handlers/productsHandler.js'
console.log("antesExport")

export const productRoutes = Router()
console.log("despuesExport")
productRoutes.get("/:id", async (req,res) => await getProductByIdHandler(req,res) )
productRoutes.get("/",  async (req,res) => await getAllProducts(req,res))
productRoutes.post("/", async (req,res) => await postProductHandler(req,res) )

