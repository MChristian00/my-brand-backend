import mongoose from "mongoose";
import User from "../Database/Models/User";

export default class UserServices {
  static async registerUser(Firstname, Lastname, Email, hash) {
    try {
      return await User.create({
        _id: mongoose.Types.ObjectId(),
        Firstname,
        Lastname,
        Email,
        Password: hash,
      });
    } catch (error) {
      throw error;
    }
  }
  static async loginUser(Email) {
    try {
      return await User.findOne({
        Email,
      });
    } catch (error) {
      throw error;
    }
  }
  static async updateProfile(id, Email, hash) {
    try {
      return await User.findByIdAndUpdate(
        { _id: id },
        {
          Email,
          Password: hash,
        }
      );
    } catch (error) {
      throw error;
    }
  }
}
