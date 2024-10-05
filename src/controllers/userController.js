import bcrypt from "bcrypt"
import { User } from "../schemas/User.js"
import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config()

export const getAllUsersController = async() =>{
const response = await User.find({})
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
      country: "",
      state: "",
      city: "",
      postalcode: 0,
      street: "",
      streetNumber: 0,
      phoneNumber: 0,
      description: "",
    },
  });
  return user
};

export const userLoginController = async(email,password) =>{
   
    try {
       
        // Buscar al usuario en la base de datos por email
        const user = await User.findOne({ email });
        const { password, ...userWithoutPassword } = user
        // Si el usuario no existe o la contraseña no coincide, enviamos un error 401 (no autorizado)
        if(!user){
            throw new Error({ message: 'Email  incorrecto' })
        }
        if(!await bcrypt.compare(password, user.password)){
            throw new Error({ message: 'Contraseña incorrecta' })
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
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }




}



export const changeUserInfoController = async() =>{

}



export const deleteUserController = async() =>{

}