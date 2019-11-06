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
    posts:[CrimePost]
  }
   
  input UserInput {
    nickname: String
    email: String
    password:String
  }
  
 
  
  
  
  type CrimePost {    
    postTxt: String
    postImg: String
    location: String
    crimeType: Int
    comments: String
  }
  input CrimePostInput{
    postTxt:String
    postImg:String
    location:String
    crimeType:String
  }
  type Query{
    hello(data:String):String
  } 

  type Mutation{
    addUser(userData: UserInput) : Token 
    doLogin(email:String,password:String):Token
    addCrimePost(CrimePostInfo: CrimePostInput):CrimePost
  }

`;

export default typeDefs;