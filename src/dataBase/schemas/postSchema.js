import mongoose from 'mongoose';

const schema = mongoose.Schema;

const postSchema = new schema(
  {
    user_ID: {
      type: String,
      required: true,
    },
    postTxt: {
      type: String,
      required: true,
    },
    postImg: {
      type: String,
    },
    location: {
      type: String,
    },
    crimeType: {
      type: String,
    },
    comments: {
      type: String,
    }
  },
  { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
}

export default postSchema;