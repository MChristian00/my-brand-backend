const mongoose = require("mongoose");

let Query = mongoose.model(
  "Query",
  mongoose.Schema(
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      QueryOwner: {
        type: String,
        trim: true,
        required: true,
      },
      Email: {
        type: String,
        trim: true,
        required: true,
      },
      QueryContent: {
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

export default Query;
