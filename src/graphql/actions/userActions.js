import {UserModel} from '../../dataBase/models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


/**
 * @param userData
 * @returns String
 */
const addUserAction=async(userData)=>{
    try{
        const newUser= await UserModel.create(userData);
        const token= createToken(newUser);
        return {token};
    }catch(error){
        console.log("Error,addUserAction",error);
    }
}

const findUserAction=async(filter)=>{
    try{
        return await UserModel.findOne(filter);
    }catch(error){
        console.log("Error,findUserAction",error);
    }
}

const createToken=(userData)=>{
    const exp=new Date().addDays(5).getTime();
    const payload={
        _id:userData.id,
        nickname:userData.nickname,
        email:userData.email,
        exp
    }
    return jwt.sign(payload,process.env.JWT);
}

Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

export {
    addUserAction,
    findUserAction
}