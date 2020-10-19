import bcrypt from "bcrypt";
import mongoose from "mongoose";
import User from "../Database/Models/User";
export default class UserControllers {
  static register = async (req, res) => {
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
  };

  static login = async (req, res) => {
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
  };

  static logout = async (req, res) => {
    res.status(200).json({});
  };
}
