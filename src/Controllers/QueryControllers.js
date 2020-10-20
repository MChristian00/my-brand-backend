import mongoose from "mongoose";
import Query from "../Database/Models/Query";

export default class QueryControllers {
  static async getAllQueries(req, res) {
    try {
      await Query.find({}, (err, queries) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({
          Message: `${queries.length} Queries retrieved`,
          Queries: queries,
        });
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getQuery(req, res) {
    let { id } = req.params;
    try {
      await Query.findById({ _id: id }, (err, query) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({
          Message: "Query retrieved",
          Query: query || {},
        });
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async addQuery(req, res) {
    let { QueryOwner, Email, QueryContent } = req.body;
    try {
      await Query.create(
        {
          _id: mongoose.Types.ObjectId(),
          QueryOwner,
          Email,
          QueryContent,
        },
        (err, query) => {
          if (err) return res.status(500).send(err);
          res.status(201).json({
            Message: "Query sent",
            Query: query,
          });
        }
      );
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async deleteQuery(req, res) {
    let { id } = req.params;
    try {
      await Query.findByIdAndDelete({ _id: id }, (err, query) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({
          Message: "Query deleted",
          Query: query || {},
        });
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
