import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    getUsers: [User!]
  }
  type User {
    id: ID!
    name: String!
    number: Int
  }
  type Mutation {
    createUser(name: String!, number: Int): User!
  }
`;
