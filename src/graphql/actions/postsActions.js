import { PostModel } from '../../dataBase/models';


const addCrimePostAction = async (postData) => {
  try {
    return await PostModel.create(postData);
  } catch (error) {
    console.log("Error: postsActions->addCrimePostAction", error)
  }
};

const getAllPostsAction = async () => {
  try {
    return await PostModel.find();
  } catch (error) {
    console.log("Error: getAllPostAction", error);
  }
};






export {
  addCrimePostAction,
  getAllPostsAction,  
  
}