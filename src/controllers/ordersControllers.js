import { User } from "../schemas/User.js";
import {Order} from "../schemas/Order.js"

export const createOrderController = async (userId, orderData) => {
    // Verificar si el usuario existe
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
  
    // Crear una nueva orden
    const newOrder = new Order({
      user: userId,
      orderItems: orderData.orderItems, // Debe ser un array de objetos con product, name, qty, price
      paymentStatus: orderData.paymentStatus,
      shippingStatus: orderData.shippingStatus,
      total: orderData.total,
    });
  
    // Guardar la orden en la base de datos
    const savedOrder = await newOrder.save();
    return savedOrder; // Retorna la orden guardada
  };

export const getAllOrdersController = async() =>{
    const response =  await Order.find()
    return response
} 

export const getOrdersByUserIdController = async(id) =>{
    const response =  await Order.find({ user: id })
    return response
} 