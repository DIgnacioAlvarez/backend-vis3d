import bcrypt from "bcrypt"
import { User } from "../schemas/User.js"
import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config()

export const getAllUsersController = async() =>{
const response = await User.find({}).select('-password')
return response
}


export const userRegisterController = async (userName, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    userName: userName,
    email: email,
    password: hashedPassword,
    isAdmin: false,
    ban: false,
    address: {
      country: "N/A",
      state: "N/A",
      city: "N/A",
      postalCode: 0,
      street: "N/A",
      streetNumber: 0,
      phoneNumber: 0,
      description: "N/A",
    },
   
  });
  
  return user
};

export const userLoginController = async(email,passwordBody) =>{
   
    try {
       
        // Buscar al usuario en la base de datos por email
        const user = await User.findOne({ email });
        
        if(!user){
          throw new Error('Email  incorrecto')
      }
        const { password, ...userWithoutPassword } = user
        
        // Si el usuario no existe o la contraseña no coincide, enviamos un error 401 (no autorizado)
        
        if(!await bcrypt.compare(passwordBody, user.password)){
            throw new Error('Contraseña incorrecta')
        }

        // Si las credenciales son correctas, generamos un token JWT
        const token = jwt.sign(
           userWithoutPassword, // Información dentro del token
            process.env.JWT_SECRET, // Clave secreta (debe estar en tu archivo .env)
            { expiresIn: '5h' } // Tiempo de expiración del token
        );

        // Enviar el token como respuesta
        return token

    } catch (error) {
        // Si ocurre algún error en el proceso, devolvemos un error 500
        throw new Error(error.message || 'Error al iniciar sesión');
    }




}



export const changeUserInfoController = async(id,data) =>{

  const response = await User.findByIdAndUpdate(id,data,{new:true}).select('-password')
  return response
}



export const deleteUserController = async(id) =>{
const response = await User.deleteOne({ _id: id })
const deleted = await User.findById(id) 

if (deleted === null) {
   return ('Usuario eliminado correctamente');
} else {
  throw new Error('Error: el usuario sigue existiendo en la base de datos');
}
}