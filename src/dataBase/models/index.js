import mongoose from 'mongoose';

import userSchema from '../schemas/userSchema';
import postSchema from '../schemas/postSchema';
import commentSchema from '../schemas/commentSchema';



const UserModel= mongoose.model('user',userSchema);
const PostModel = mongoose.model('post', postSchema);
const CommentModel = mongoose.model('comment', commentSchema);

export {
UserModel,
PostModel,
CommentModel,
}