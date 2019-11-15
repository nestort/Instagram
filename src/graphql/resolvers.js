
import {
  addCrimePostAction,
  getAllPostsAction,  
  
} from './actions/postsActions'

import {
  addUserAction,
  doLoginAction,
  getAllUsersAction,
  updateUserAction,
  getUserPostsAction
} from './actions/userActions';

const resolvers = {
  Query: {
    getAllUsers: async (parent, data, context, info) => {
      try {
        return await getAllUsersAction();
      } catch (error) {
        console.log("Error resolver: getAllUser")
      }
    },
    getCurrentUser(parent,data,context,info){
      const {user}=context;      
      return user;
    },
    getAllPosts: async (parent, data, context, info) => {
      try {
        return await getAllPostsAction();
      } catch (error) {
        console.log("Error resolver: getAllPosts", error);
      }
    },
    getUserPosts:async (parent,data,context,info)=>{
      try {
        const {userID} = data;
        return await getUserPostsAction(userID);
      } catch (error) {
        console.log("Error: Resolver->getPostUser",error)
      }
    }

  },
  Mutation: {
    addUser: async (parent, data, context, info) => {
      try {
        const { userData } = data;
        return await addUserAction(userData);
      }
      catch (error) {
        console.log("Error addUser", error)
      }
    },
    addCrimePost: async (parent, data, context, info) => {
      try {
        const { CrimePostInfo } = data;
        const { user } = context;
        const newPost = await addCrimePostAction(CrimePostInfo);
         const filter = { _id: user._id };
         const update = { $push: { 'posts': newPost._id } };
         await updateUserAction(filter, update);
        return newPost;
      } catch (error) {
        console.log("Error addUser", error)
      }
    },
    doLogin: async (parent, data, context, info) => {
      try {
        const { email, password } = data;
        return await doLoginAction(email, password);
      } catch (error) {
        console.log("Error,doLogin", error)
      }
    },
    addComment: async (parent, data, context, info) => {
      try {
        const { user } = context;
        const { commentData } = data;
        return await addCommentAction(commentData, user._id);
      } catch (error) {
        console.log("TCL: error", error);
      }
    },
    updateComment: async (parent, data, context, info) => {
      try {
        const { comment, commentID } = data;
        return await updateContentCommentAction(comment, commentID);
      } catch (error) {
        console.log("TCL: error", error);
      }
    },
    deleteComment: async (parent, data, context, info) => {
      try {
        const { commentID } = data;
        return await deleteCommentAction(commentID);
      } catch (error) {
        console.log("TCL: error", error);
      }
    }

  }
};

export default resolvers;