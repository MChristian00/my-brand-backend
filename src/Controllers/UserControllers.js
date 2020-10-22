import bcrypt from "bcrypt";
import { generateToken } from "../Helpers/generateToken";
import UserServices from "../Services/UserServices";

const { registerUser, loginUser, updateProfile } = UserServices;
export default class UserControllers {
  static async register(req, res) {
    const { Firstname, Lastname, Email, Role, Password } = req.body;
    try {
      let hash = bcrypt.hashSync(Password, 10);
      await registerUser(Firstname, Lastname, Email, Role, hash).then(
        (data) => {
          let token = generateToken({
            _id: data._id,
            Firstname,
            Lastname,
            Email,
            Role,
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
    try {
      await loginUser(Email).then((user) => {
        if (user) {
          let { _id, Email, Firstname, Lastname, Role } = user;
          let token = generateToken({
            _id,
            Email,
            Firstname,
            Lastname,
            Role,
          });
          let isValid = user
            ? bcrypt.compareSync(Password, user.Password)
            : null;
          if (isValid)
            return res.json({
              Message: "User successfully logged in",
              Token: token,
            });
        }
        res.status(404).json({
          Message: "Wrong credentials",
        });
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async updateProfile(req, res) {
    const { Email, Password } = req.body;
    const { id } = req.params;
    try {
      let hash = bcrypt.hashSync(Password, 10);
      await updateProfile(id, Email, hash).then((user) => {
        res.status(201).json({
          Message: "User profile updated",
        });
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async logout(req, res) {
    console.log(req.userData);
    res.status(200).json({
      Message: "Successfully logged out",
    });
  }
}
