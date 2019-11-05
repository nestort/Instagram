
import {addUserAction} from './actions/userActions';
import{addCrimePostAction} from './actions/postsActions'

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
      }
    }
  };

  export default resolvers;