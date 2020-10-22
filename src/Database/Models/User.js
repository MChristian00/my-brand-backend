const mongoose = require("mongoose");

let User = mongoose.model(
  "User",
  mongoose.Schema(
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      Firstname: {
        type: String,
        trim: true,
        required: true,
      },
      Lastname: {
        type: String,
        trim: true,
        required: true,
      },
      Role: {
        type: String,
      },
      Email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      Password: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);

export default User;
