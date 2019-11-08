import mongoose from 'mongoose';

const schema = mongoose.Schema;

const commentSchema = new schema(
  {
    comment: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    postID: {
      type: schema.Types.ObjectId,
      ref: 'post'
    },
    authorID: {
      type: schema.Types.ObjectId,
      ref: 'user'
    }
  }, { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
}

export default commentSchema;