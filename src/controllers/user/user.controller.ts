import { Request, Response } from "express";
import { User } from "../../models/user";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("Hubo un error al traer los usuarios");
  }
};