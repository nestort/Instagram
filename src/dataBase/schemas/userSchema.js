import mongoose from 'mongoose';
const schema = mongoose.Schema;

const userSchema = new schema({
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
        type: schema.Types.ObjectId,
        ref: 'post'
    }],
    avatar: {
        type: String
    },
},
{ timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

export default userSchema;