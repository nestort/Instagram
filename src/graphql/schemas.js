const { gql } = require('apollo-server');

const typeDefs = gql`

  directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD

  type Token{
    token:String
  }

  type User {
    nickname: String
    email: String
    password:String
    posts:[Post]
  }
   
  input UserInput {
    nickname: String
    email: String
    password:String
  }
  
  type Post{
    de:String
  }
  

 
  type Query{
    hello(data:String):String
  }

  type Mutation{
    addUser(userData: UserInput) : Token 
    doLogin(email:String,password:String):Token
  }
  
  type CrimePost {
    _id: ID
    postTxt: String
    postImg: String
    location: String
    crimeType: Int
    comments: [comment]
  }
  input CrimePostInput{
    postTxt:String
    postImg:Upload
    location:String
    crimeType:Enum
    [H,M]
  }

  type Query{
    getCrimePostInfo : CrimePost
  }

  type Mutation{
    addCrimePost(CrimePostInfo : CrimePostInput)
  }
`;

export default typeDefs;