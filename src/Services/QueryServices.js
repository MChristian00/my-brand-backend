import mongoose from "mongoose";
import Query from "../Database/Models/Query";

export default class QueryServices {
  static async getAllQueries() {
    try {
      let Queries = await Query.find({});
      return {
        Status: 200,
        Queries,
      };
    } catch (err) {
      return {
        statusCode: 500,
        Error: err,
      };
    }
  }

  static async addBlog(QueryOwner, Email, QueryContent) {
    try {
      let query = await Query.create({
        QueryOwner,
        Email,
        QueryContent,
      });
      return {
        Status: 200,
        Query: query,
      };
    } catch (err) {
      return {
        statusCode: 500,
        Error: err,
      };
    }
  }
  static async getQuery(id) {
    try {
      let query = await Query.findById({ _id: id });
      return {
        Status: 200,
        Query: query,
      };
    } catch (err) {
      return {
        statusCode: 500,
        Error: err,
      };
    }
  }
  static async deleteQuery(id) {
    try {
      let query = await Query.findByIdAndDelete({ _id: id });
      return {
        Status: 200,
        Query: query,
      };
    } catch (err) {
      return {
        statusCode: 500,
        Error: err,
      };
    }
  }
}
