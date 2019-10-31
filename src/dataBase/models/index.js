import mongoose from 'mongoose';

import userSchema from '../schemas/userSchema';

const UserModel= mongoose.model('user',userSchema);

export {
UserModel
}