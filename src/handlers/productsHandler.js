import {getAllProductController,postProductController,getProductByIdController,getByNameController} from '../controllers/productController.js'


export const getAllProducts = async(req,res) => {
    const {name} = req.query
    
    try {
        const response =  name? await getByNameController(name) :  await getAllProductController()
      res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}

export const postProductHandler = async (req,res) => {
    const body = req.body
    try {
        const response = await postProductController(body)
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}

export const getProductByIdHandler = async (req,res) => {
    const {id} = req.params
    try {
        const response = await getProductByIdController(id)
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}

