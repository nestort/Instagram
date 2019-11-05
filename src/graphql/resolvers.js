
import{addCrimePostAction} from './actions/postsActions'

import {
  addUserAction,
  doLoginAction,
} from './actions/userActions';
const resolvers = {
    Query: {
        hello(root) {
          return 'world';
        }
      },
    Mutation:{
        addUser:async(parent,data,context,info)=>{
            try{
                const { userData } = data;
                return await addUserAction(userData);
            }
            catch(error){
                console.log("Error addUser",error)
            }
        },
        AddCrimePost: async (parent,data,context,info) => {
          try {
              const { CrimePostInfo } = data;
              const { user } = context;
              const newPost = await addCrimePostAction(CrimePostInfo);
              const filter = { _id: user._id };
              const update = { $push: { 'CrimePosts': newPost._id } };
              await updateUserAction(filter, update);
              return newPost;
          } catch (error) {
              
          }
      },
        doLogin:async(parent,data,context,info)=>{
          try{
            const {email,password}=data;
            return await doLoginAction(email,password);
          }catch(error){
            console.log("Error,doLogin",error)
          }
        }
    }
  };

  export default resolvers;