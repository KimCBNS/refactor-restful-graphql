// used chatGPT to work through the usercontrollers file and convert these to
// resolvers rather than routes.

const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    async user(_, { id }) {
      return User.findById(id);
    },
    async users() {
      return User.find();
    },
  },
  Mutation: {
    async addUser(_, { username, email, password }) {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    async login(_, { username, email, password }) {
      const user = await User.findOne({ $or: [{ username }, { email }] });
      if (!user || !(await user.isCorrectPassword(password))) {
        throw new Error('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    async saveBook(_, { bookInput }, { user }) {
      return User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: bookInput } },
        { new: true }
      );
    },
    async deleteBook(_, { bookId }, { user }) {
      return User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
