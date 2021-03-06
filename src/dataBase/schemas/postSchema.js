import mongoose from 'mongoose';

const schema = mongoose.Schema;

const postSchema = new schema(
  {    
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
      type:String,
      enum :['Asalto','Robo','Otro']  
      },
    comments: [{
      type: schema.Types.ObjectId,
      ref: 'comment',
    }],
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
}

export default postSchema;