import {createOrderController,getAllOrdersController,getOrdersByUserIdController,changeOrderStatusByIdController,searchOrderByIdController, deleteOrderByIdController} from "../controllers/ordersControllers.js"


export const createOrderHandler = async (req, res) => {
    const {orderData, userId} = req.body; // Los datos de la orden vendrán del cuerpo de la solicitud
  
    try {
      const newOrder = await createOrderController(userId, orderData);
      res.status(201).json(newOrder); // Retorna la nueva orden con un estado 201 (Created)
    } catch (error) {
      console.error(error); // Para depuración
      res.status(400).json({ message: error.message }); // Retorna el mensaje de error en caso de fallo
    }
  };

  export const getAllOrdersHandler = async(req,res)=>{
    try {
        const response = await getAllOrdersController()
        res.status(201).json(response); 
      } catch (error) {
       
        res.status(400).json({ message: error.message }); // Retorna el mensaje de error en caso de fallo
      }
  }

  export const getOrderByUserIdHandler = async(req,res)=>{
    const {id} = req.params
    try {
        const response = await getOrdersByUserIdController(id)
        res.status(201).json(response); 
      } catch (error) {
       
        res.status(400).json({ message: error.message }); // Retorna el mensaje de error en caso de fallo
      }
  }

  
  export const changeOrderStatusByIdHandler = async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try {
        const response = await changeOrderStatusByIdController(id, data)
        res.status(201).json(response); 
      } catch (error) {
       
        res.status(400).json({ message: error.message }); 
      }
  }

  export const searchOrderByIdHandler = async(req,res)=>{
    const {orderId} = req.params
    try {
        const response = await searchOrderByIdController(orderId)
        res.status(201).json(response); 
      } catch (error) {
       
        res.status(400).json({ message: error.message }); 
      }
  }

  export const deleteOrderByIdHandler = async(req,res)=>{
    const {id} = req.params
    try {
        const response = await deleteOrderByIdController(id)
        res.status(201).json(response); 
      } catch (error) {
       
        res.status(400).json({ message: error.message }); 
      }
  }