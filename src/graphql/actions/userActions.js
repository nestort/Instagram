import {UserModel} from '../../dataBase/models';



const addUserAction=async(userData)=>{
    try{
        return await UserModel.create(userData);
    }catch(error){
        console.log("Error,addUserAction",error);
    }
}
export {
    addUserAction
}