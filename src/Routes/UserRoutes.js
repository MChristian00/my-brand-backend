import { Router } from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import User from "../Database/Models/User";
import { generateToken } from "../Helpers/generateToken";
import Validation from "../Middlewares/Validation";

const router = Router();

router.post("/register", async (req, res) => {
  const { Firstname, Lastname, Email, Password } = req.body;
  try {
    let hash = bcrypt.hashSync(Password, 10);
    await User.create(
      {
        _id: mongoose.Types.ObjectId(),
        Firstname,
        Lastname,
        Email,
        Password: hash,
      },
      (err, user) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({
          Message: "User added",
          User: user,
        });
      }
    );
  } catch (error) {
    res.status(100).send(error);
  }
});

router.post(
  "/signin",
  Validation.loginFormValidation,
  generateToken,
  async (req, res) => {
    const { Email, Password } = req.body;
    try {
      await User.findOne(
        {
          Email,
        },
        (err, user) => {
          if (err) return res.status(500).send(err);
          let isValid = bcrypt.compareSync(Password, user.Password);
          if (isValid)
            return res.json({
              Message: "User successfully logged in",
              Token: res.Token,
              User: user,
            });
          else
            res.status(400).json({
              Message: "Wrong credentials",
            });
        }
      );
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

export default router;
