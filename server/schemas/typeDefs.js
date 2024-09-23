const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }
    
  input BookInput {
  authors: [String]
  description: String!
  bookId: String!
  image: String
  link: String
  title: String!
}
  
  type Query {
    users: [User]
    user(id: ID!): User
    books: [Book]
  }

  type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(username: String, email: String, password: String!): Auth
  saveBook(bookInput: BookInput!): User
  deleteBook(bookId: String!): User  # Ensure this is included
}

`;

module.exports = typeDefs;