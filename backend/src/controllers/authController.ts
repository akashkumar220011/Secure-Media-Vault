import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json({
      token: generateToken(user._id.toString()),
      user,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Email" });

    const match = await bcrypt.compare(password, user.password!);
    if (!match) return res.status(400).json({ message: "Wrong Password" });

    res.json({
      token: generateToken(user._id.toString()),
      user,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
