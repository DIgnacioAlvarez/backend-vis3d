import axios from 'axios'
import mongoose from 'mongoose'
import { Product } from './src/schemas/Product';


export const getAllProductController = async () =>{
    const response = await Product.find()
    console.log("controler")
    return response
}
