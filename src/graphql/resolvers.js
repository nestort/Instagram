
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