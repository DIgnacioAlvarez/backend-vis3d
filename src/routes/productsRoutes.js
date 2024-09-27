import { Router } from "express";
import {getAllProducts,postProductHandler} from '../handlers/productsHandler.js'
console.log("antesExport")

export const productRoutes = Router()
console.log("despuesExport")
productRoutes.get("/",  async (req,res) => await getAllProducts(req,res))
productRoutes.post("/", async (req,res) => await postProductHandler(req,res) )
