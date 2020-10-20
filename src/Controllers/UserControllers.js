import bcrypt from "bcrypt";
import mongoose from "mongoose";
import User from "../Database/Models/User";
import { generateToken } from "../Helpers/generateToken";

export default class UserControllers {
  static async register(req, res) {
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
          let token = generateToken({
            _id: user._id,
            Firstname,
            Lastname,
            Email,
          });
          res.status(201).json({
            Message: "User added",
            Token: token,
          });
        }
      );
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async login(req, res) {
    const { Email, Password } = req.body;
    let token = generateToken({ Email, Password });
    try {
      await User.findOne(
        {
          Email,
        },
        (err, user) => {
          if (err) return res.status(500).send(err);
          let isValid = user
            ? bcrypt.compareSync(Password, user.Password)
            : null;
          if (isValid)
            return res.json({
              Message: "User successfully logged in",
              Token: token,
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

  static async updateProfile(req, res) {
    const { Email, Password } = req.body;
    const { id } = req.params;
    try {
      let hash = bcrypt.hashSync(Password, 10);
      await User.findByIdAndUpdate(
        { _id: id },
        {
          Email,
          Password: hash,
        },
        (err, user) => {
          if (err) return res.status(500).send(err);
          res.status(201).json({
            Message: "User profile updated",
          });
        }
      );
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async logout(req, res) {
    res.status(200).json({
      Message: "Successfully logged out",
    });
  }
}
