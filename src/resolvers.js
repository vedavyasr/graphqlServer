import { User } from './models/User';
import { Post } from './models/Post';
export const resolvers = {
  Query: {
    getUsers: () => User.find(),
    getUser: (_, { name }) => User.findOne({ name })
  },
  Mutation: {
    createUser: async (_, { name, number }) => {
      const person = new User({ name, number });
      await person.save();
      return person;
    },
    addPost: async (_, { title, description, userId }) => {
      try {
        await User.findById(userId).then(async user => {
          if (user) {
            const post = new Post({ title, description, User: userId });
            await post.save();
            return {
              code: 200,
              message: 'Created Successfully'
            };
          }
        });
      } catch (err) {
        return {
          code: 500,
          message: 'something went wrong',
          error: err.message
        };
      }
    }
  }
};
