import mongoose from "mongoose";
import Query from "../Database/Models/Query";
import QueryServices from "../Services/QueryServices";
export default class QueryControllers {
  static async getAllQueries(req, res) {
    try {
      let { statusCode, Queries, Error } = QueryServices.getAllQueries();
      if (statusCode === 500) return res.status(500).send(Error);
      if (Queries.length)
        return res.status(200).json({
          Message: `${queries.length} Queries retrieved`,
          Queries,
        });
      return res.status(200).json({
        Message: `No Queries added yet`,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getQuery(req, res) {
    let { id } = req.params;
    try {
      let { statusCode, Query, Error } = QueryServices.getQuery(id);
      if (statusCode === 500) return res.status(500).send(Error);
      if (Query)
        return res.status(200).json({
          Message: "Query retrieved",
          Query: Query,
        });
      return res.status(404).json({
        Message: `Resource not found`,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async addQuery(req, res) {
    let { QueryOwner, Email, QueryContent } = req.body;
    try {
      let { statusCode, Query, Error } = QueryServices.addQuery(
        QueryOwner,
        Email,
        QueryContent
      );
      if (statusCode === 500) return res.status(500).send(Error);
      if (err) return res.status(500).send(err);
      return res.status(201).json({
        Message: "Query sent",
        Query,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async deleteQuery(req, res) {
    let { id } = req.params;
    try {
      let { statusCode, Query, Error } = QueryServices.deleteQuery(id);
      if (statusCode === 500) return res.status(500).send(Error);
      if (Query)
        return res.status(200).json({
          Message: "Query deleted",
          Query: Query,
        });
      return res.status(404).json({
        Message: `Resouece not found`,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
