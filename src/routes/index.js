import { Router } from "express";
import { productRoutes } from "./productsRoutes.js";
import {usersRoutes} from "./usersRoutes.js"

const router = Router()

router.use("/products",productRoutes)
router.use("/users",usersRoutes)

export default router