import { Resolvers } from '@apollo/client';
import Role from '../../models/roles';

const resolvers: Resolvers = {
  Query: {
    getRoles: async (_, __) => {
      return await Role.find({});
    },
    getRoleById: async (_, { id }) => {
      return await Role.findById(id);
    }
  },
  Mutation: {
    newRole: async (_, { input }) => {
      const { name } = input;
      const roleExist = await Role.findOne({ name });
      if (roleExist) throw new Error('Role already exist');

      const role = await Role.create({
        ...input
      });
      return role;
    },
    updateRole: async (_, { id, input }) => {
      const roleExist = await Role.findById(id);
      if (!roleExist) throw new Error('Role does not exist');

      const role = await Role.findByIdAndUpdate(id, input, { new: true });
      return role;
    }
  }
};

export default resolvers;
