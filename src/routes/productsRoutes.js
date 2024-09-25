import { Router } from "express";
import {getAllProducts} from '../handlers/productsHandler'
console.log("antesExport")

export const productRoutes = Router()
console.log("despuesExport")
productRoutes.get("/",  async (req,res) => await getAllProducts(req,res))
