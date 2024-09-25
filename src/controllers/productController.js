
import mongoose from 'mongoose'
import { Product } from '../schemas/Product.js';


export const getAllProductController = async () =>{
    const response = await Product.find()
    console.log("controler")
    return response
}
