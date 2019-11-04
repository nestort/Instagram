import mongoose from 'mongoose';
const schema = mongoose.Schema;
import bcrypt from 'bcrypt';

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

userSchema.pre("save",function(next){
    let user=this;
    bcrypt.genSalt(10,function(error,salt){
        bcrypt.hash(user.password,salt,function(error,hash){
            if(error) return next(error);
            user.password=hash;
            next();
        });
    });
})

export default userSchema;