import {
  getAllUsersController,
  userRegisterController,
  userLoginController,
  changeUserInfoController,
  deleteUserController,
  updateWishlistController
} from "../controllers/userController.js";

export const getAllUsersHandler = async (req, res) => {
  try {
    const response = await getAllUsersController();
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const userRegisterHandler = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const response = await userRegisterController(userName, email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const userLoginHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await userLoginController(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};



export const changeUserInfoHandler = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const response = await changeUserInfoController(id, data);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
export const deleteUserHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await deleteUserController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ message: error.message });
  
  }
};

export const updateWishlistHandler = async (req,res) =>{

  const {userId, productId, action} = req.body
  console.log(req.body)
  console.log(userId)
  console.log("hola mundo")
  try {
    const response = await updateWishlistController(userId,productId,action);
    res.status(200).json(response);
  } catch (error) {

    console.log(userId)
    res.status(401).json({ message: error.message });
  
  }
}