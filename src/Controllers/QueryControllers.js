import { QueryServices } from "../Services/QueryServices";

const { getAllQueries, getQuery, addQuery, deleteQuery } = QueryServices;
export default class QueryControllers {
  static async getAllQueries(req, res) {
    try {
      await getAllQueries()
        .then((Queries) => {
          if (Queries.length)
            return res.status(200).json({
              Message: `${Queries.length} Queries retrieved`,
              Queries,
            });
          return res.status(200).json({
            Message: `No Queries added yet`,
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getQuery(req, res) {
    let { id } = req.params;
    try {
      await getQuery(id)
        .then((Query) => {
          if (Query)
            return res.status(200).json({
              Message: "Query retrieved",
              Query,
            });
          return res.status(404).json({
            Error: `Resource not found`,
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async addQuery(req, res) {
    let { QueryOwner, Email, QueryContent } = req.body;
    try {
      await addQuery(QueryOwner, Email, QueryContent)
        .then((Query) => {
          return res.status(201).json({
            Message: "Query sent",
            Query,
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async deleteQuery(req, res) {
    let { id } = req.params;
    try {
      await deleteQuery(id)
        .then((Query) => {
          if (Query)
            return res.status(200).json({
              Message: "Query deleted",
              Query: Query,
            });
          return res.status(404).json({
            Error: `Resource not found`,
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
