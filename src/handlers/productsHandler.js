import {getAllProductController,postProductController,getProductByIdController,getByNameController, changeProductController,deleteProductController} from '../controllers/productController.js'


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

export const changeProductHandler = async (req,res) =>{
    const {id,changes} = req.body
   
    try {
        const response = await changeProductController(id,changes)
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}

export const deleteProductByIdHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
      const response = await deleteProductController(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(401).json({ message: error.message });
    
    }
  };