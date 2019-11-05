import { ApolloServer } from 'apollo-server';
import mongoose  from 'mongoose';

import typeDefs  from './graphql/schemas';
import resolvers  from './graphql/resolvers';

import {
  getContext,
  AuthDirective
} from './graphql/actions/authActions';


const url = process.env.DATA_BASE;
mongoose.connect(
  url,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, "¡Error de conexion!"));
mongoDB.on('open', () => console.log('BD conectada'));



const server = new ApolloServer({ 
  typeDefs,
   resolvers,
   schemaDirectives: {
    AuthDirective: AuthDirective
  },
  context: async ({ req }) => getContext(req), });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});