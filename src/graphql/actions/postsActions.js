postactions

import { PostModel } from '../../dataBase/models';


const addCrimePostAction = async (postData) => {
  try {
    return await PostModel.create(postData);
  } catch (error) {
    console.log("TCL: error", error)
  }
};

export {
  addCrimePostAction,
}