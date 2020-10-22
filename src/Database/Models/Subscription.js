const mongoose = require("mongoose");

let Subscription = mongoose.model(
  "Subscription",
  mongoose.Schema(
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      Name: {
        type: String,
        trim: true,
        required: true,
      },
      Email: {
        type: String,
        trim: true,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);

export default Subscription;
