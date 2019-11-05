import mongoose from 'mongoose';

import userSchema from '../schemas/userSchema';
import postSchema from '../schemas/postSchema';


const UserModel= mongoose.model('user',userSchema);
const PostModel = mongoose.model('post', postSchema);

export {
UserModel,
PostModel
}