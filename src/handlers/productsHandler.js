import {getAllProductController} from '../controllers/productController.js'

export const getAllProducts = async(req,res) => {
    try {
        const response = await getAllProductController();
      res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}