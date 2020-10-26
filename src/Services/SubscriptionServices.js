import mongoose from "mongoose";
import Subscription from "../Database/Models/Subscription";

export default class SubscriptionServices {
  static async addSubscr(Name, Email) {
    try {
      return await Subscription.create({
        _id: mongoose.Types.ObjectId(),
        Name,
        Email,
      });
    } catch (err) {
      throw err;
    }
  }
  static async getSubscr() {
    try {
      return await Subscription.find({});
    } catch (err) {
      throw err;
    }
  }
  static async deleteSubscr(id) {
    try {
      return await Subscription.findByIdAndDelete({
        _id: id,
      });
    } catch (err) {
      throw err;
    }
  }
}
