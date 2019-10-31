
import {addUserAction} from './actions/userActions';
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
        }
    }
  };

  export default resolvers;