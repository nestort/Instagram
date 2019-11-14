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
    crimeType: String
    comments: [Comment]
  }
  type Comment {
    _id: ID
    comment: String
    isActive: Boolean
    postID: ID
    authorID: ID
    createdAt: String
    updatedAt: String
  }
  input CrimePostInput{
    postTxt:String
    postImg:String
    location:String
    crimeType:String
  }
  input CommentInput {
    comment: String
    postID: ID
  }

  type Query{    
    getAllUsers:[User]
    getAllPosts:[CrimePost]
    
  } 

  type Mutation{
    addUser(userData: UserInput) : Token 
    doLogin(email:String,password:String):Token
    
    addCrimePost(CrimePostInfo: CrimePostInput):CrimePost
    
    addComment(commentData: CommentInput) : Comment
    updateComment(comment: String, commentID: ID) : Comment 
    deleteComment(commentID: ID) : Comment 
  }

`;

export default typeDefs;