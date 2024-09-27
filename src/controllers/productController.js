
import mongoose from 'mongoose'
import { Product } from '../schemas/Product.js';


export const getAllProductController = async () =>{
    const response = await Product.find()
    console.log("controler")
    return response
}


export const postProductController = async (body) => {
  const {
    name,
    price,
    image,
    description,
    stock,
    enable,
    category,
    dimensions,
  } = body;

  const impresion = new Product({
    name: name,
    price: price,
    image: image,
    description: description,
    stock: stock,
    enable: enable,
    category: category,
    dimensions: {
      height: dimensions.height,
      width: dimensions.width,
      depth: dimensions.depth,
    },
  });

  impresion.save()

  return impresion
};

export const getProductByIdController = async(id) => {

     return await Product.findById(id)
}

export const getByNameController = async(name) =>{
    return await Product.find({name:name})
}