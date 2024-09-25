import { Router } from "express";
import { productRoutes } from "./productsRoutes.js";

const router = Router()

router.use("/products",productRoutes)

export default router