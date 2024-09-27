import {getAllProductController,postProductController} from '../controllers/productController.js'

export const getAllProducts = async(req,res) => {
    try {
        const response = await getAllProductController();
      res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}

export const postProductHandler = async (req,res) => {
    const body = req.body
    console.log(body)
    try {
        const response = await postProductController(body)
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}