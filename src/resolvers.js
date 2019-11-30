import { User } from './models/User';

export const resolvers = {
  Query: { getUsers: () => User.find() },
  Mutation: {
    createUser: async (_, { name, number }) => {
      const person = new User({ name, number });
      await person.save();
      return person;
    }
  }
};
