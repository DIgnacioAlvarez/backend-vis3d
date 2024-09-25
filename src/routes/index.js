import { Router } from "express";
import { productRoutes } from "./productsRoutes";

export const router = Router()

router.use("/products",productRoutes)