const { gql } = require('apollo-server');

const typeDefs = gql`

  directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD

  type Token{
    token:String
  }

  type User {
    _id: ID
    nickname: String
    email: String    
    posts:[CrimePost]
    avatar:String
    createdAt: String
    updatedAt: String
  }
   
  input UserInput {
    nickname: String
    email: String
    password:String,
    avatar:Upload
  }
  type CrimePost {   
    _id: ID
    postTxt: String
    postImg: String
    location: String
    crimeType: String
    comments: [Comment]
    createdAt: String
    updatedAt: String
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
    getUserPosts(userID:String):[CrimePost]
    getCurrentUser:User 
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