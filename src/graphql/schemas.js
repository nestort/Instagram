const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Person {
    name: String
    age: Int
  }
  type Query {
    books: [Book]
    person: [Person]
  }
`;

export default typeDefs;