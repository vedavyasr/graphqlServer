import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    number: Int
  }
  type Post {
    id: ID!
    title: String!
    description: String!
    userId: ID!
  }
  type Response {
    code: Int!
    message: String!
    error: String
  }
  type Query {
    getAllUsers: [User!]
    getUser(name: String!): User
    getAllPosts(userId: ID!): [Post]
  }
  type Mutation {
    createUser(name: String!, number: Int): User!
    addPost(title: String!, description: String!, userId: ID!): Response!
  }
`;
