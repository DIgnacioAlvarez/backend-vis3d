import { Router } from "express";
import { productRoutes } from "./productsRoutes.js";
import {usersRoutes} from "./usersRoutes.js"
import { ordersRoutes } from "./ordersRoutes.js";

const router = Router()

router.use("/products",productRoutes)
router.use("/users",usersRoutes)
router.use("/orders",ordersRoutes)

export default router