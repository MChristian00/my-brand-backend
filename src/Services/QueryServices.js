import mongoose from "mongoose";
import Query from "../Database/Models/Query";

export class QueryServices {
  static async getAllQueries() {
    try {
      return await Query.find({});
    } catch (err) {
      throw error;
    }
  }

  static async addQuery(QueryOwner, Email, QueryContent) {
    try {
      return await Query.create({
        _id: mongoose.Types.ObjectId(),
        QueryOwner,
        Email,
        QueryContent,
      });
    } catch (err) {
      throw error;
    }
  }

  static async getQuery(id) {
    try {
      return await Query.findById({ _id: id });
    } catch (err) {
      throw error;
    }
  }

  static async deleteQuery(id) {
    try {
      return await Query.findByIdAndDelete({ _id: id });
    } catch (err) {
      throw error;
    }
  }
}
