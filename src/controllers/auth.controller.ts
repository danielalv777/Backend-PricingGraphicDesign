import { Request, Response } from "express";
import { hashPassword } from "../services/password.service";
import { generateToken } from "../services/auth.service";
import { User } from "../models/user";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, lastname, email, password, phoneNumber, role, activeDevice } = req.body;
  if (!name || !lastname || !email || !password || !phoneNumber || !role || !activeDevice) {
    res.status(400).json({message: "Faltan campos por llenar"});
    return;
  };

  try {
    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword);
  
    const user = new User({ name, lastname, email, password: hashedPassword, phoneNumber, role, activeDevice});
    const newUser = await user.save();
    const token = generateToken(user);
    console.log(token, newUser);
    res.status(201).json({message: "Exito al crear el usuario", data: newUser});
  } catch (error) {
    console.log(error);
    res.status(500).json("Hubo un error al crear el usuario");
  }
};