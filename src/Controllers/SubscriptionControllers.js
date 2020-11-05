import SubscriptionServices from "../Services/SubscriptionServices";

export default class SubscriptionControllers {
  static async addSubscr(req, res) {
    const { Name, Email } = req.body;
    try {
      await SubscriptionServices.addSubscr(Name, Email)
        .then((data) => {
          res.status(201).json({
            Message: "Subscription successfull",
            Subscription: data,
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).json({
        Error: error,
      });
    }
  }
  static async getSubscr(req, res) {
    try {
      await SubscriptionServices.getSubscr()
        .then((data) => {
          if (data.length)
            return res.status(200).json({
              Message: `${data.length} Subscription retrieved`,
              Subscriptions: data,
            });
          return res.status(200).json({
            Message: "No subscriptions yet",
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).json({
        Error: error,
      });
    }
  }
  static async deleteSubscr(req, res) {
    const { id } = req.params;
    try {
      await SubscriptionServices.deleteSubscr(id)
        .then((data) => {
          if (data)
            return res.status(200).json({
              Message: "Successfully unsubscribed",
              Subscription: data,
            });
          return res.status(404).json({
            Error: "Resource not found",
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).json({
        Error: error,
      });
    }
  }
}
