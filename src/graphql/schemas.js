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
    getCrimePostInfo : CrimePost
  } 

  type Mutation{
    addUser(userData: UserInput) : Token 
    doLogin(email:String,password:String):Token
    addCrimePost(CrimePostInfo : CrimePostInput):CrimePost
  }
  
  type CrimePost {
    _id: ID
    postTxt: String
    postImg: String
    location: String
    crimeType: Int
    comments: String
  }
  input CrimePostInput{
    postTxt:String
    postImg:Upload
    location:String
    crimeType:Enum
    [Robo,Asalto,Agresión]
  }


`;

export default typeDefs;