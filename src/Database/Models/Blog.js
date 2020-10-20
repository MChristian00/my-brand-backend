const mongoose = require("mongoose");

let Blog = mongoose.model(
  "Blog",
  mongoose.Schema(
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      Title: {
        type: String,
        trim: true,
        required: true,
      },
      Content: {
        type: String,
        trim: true,
        required: true,
      },
      Picture: {
        type: String,
      },
      Comments: { type: Array },
    },
    {
      timestamps: true,
    }
  )
);

export default Blog;
