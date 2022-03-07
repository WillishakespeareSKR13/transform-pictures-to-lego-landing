import { Resolvers } from '@apollo/client';
import bcryptjs from 'bcryptjs';
import Users from '../../models/users';
import Roles from '../../models/roles';
import StoreType from '../../models/storeTypes';
import Store from '../../models/store';
import createToken from '../utils/createToken';

const resolvers: Resolvers = {
  Query: {
    me: async (_, __, ctx) => {
      if (!ctx.user) {
        throw new Error('You are not logged in');
      }
      return ctx.user;
    },
    getUsers: async (_, __) => {
      return await Users.find({})
        .populate('role')
        .populate({
          path: 'store',
          populate: {
            path: 'storeType'
          }
        });
    },
    getUserById: async (_, { id }) => {
      return await Users.findById(id)
        .populate('role')
        .populate({
          path: 'store',
          populate: {
            path: 'storeType'
          }
        });
    }
  },
  Mutation: {
    newUser: async (_, { input }) => {
      const { email, password, role, store } = input;

      const roleTypeExist = async () => {
        if (!role) {
          const roleUser = await Roles.findOne({ name: 'USER' });
          if (!roleUser) throw new Error('First create a role named USER');
          return roleUser;
        }
        const roleExist = await Roles.findById(role);
        if (!roleExist) throw new Error('Role does not exist');
        return roleExist;
      };

      const storeTypeExist = async () => {
        if (!store) {
          const typeExist = await StoreType.findOne({ name: 'WEBSITE' });
          if (!typeExist)
            throw new Error('First create a StoreType named WEBSITE');

          const storeExist = await Store.findOne({ storeType: typeExist.id });
          if (!storeExist) throw new Error('First create a Store');

          return storeExist;
        }
        const storeExist = await Users.findById(store);
        if (!storeExist) throw new Error('Store does not exist');
        return storeExist;
      };

      const roleExist = await roleTypeExist();
      const storeExist = await storeTypeExist();

      const userExist = await Users.findOne({ email });
      if (userExist) throw new Error('User already exist');

      const hashedPassword = await bcryptjs.hash(password, 10);
      const user = await Users.create({
        ...input,
        password: hashedPassword,
        role: roleExist.id,
        store: storeExist.id
      });
      return {
        ...user.toJSON(),
        role: roleExist,
        store: storeExist
      };
    },

    login: async (_, { input }) => {
      const { email, password } = input;

      const userExist = await Users.findOne({ email })
        .populate('role')
        .populate({
          path: 'store',
          populate: {
            path: 'storeType'
          }
        });
      if (!userExist) throw new Error('User does not exist');

      if (userExist.disabled) throw new Error('User is disabled');

      const isMatch = await bcryptjs.compare(password, userExist.password);
      if (!isMatch) throw new Error('Password does not match');

      const token = createToken(userExist, 'LEGOSECRET', '24h');

      return { token };
    },

    updateUser: async (_, { id, input }) => {
      const { password, role, store } = input;

      const roleTypeExist = async () => {
        if (!role) {
          const roleUser = await Roles.findOne({ name: 'USER' });
          if (!roleUser) throw new Error('First create a role named USER');
          return roleUser;
        }
        const roleExist = await Roles.findById(role);
        if (!roleExist) throw new Error('Role does not exist');
        return roleExist;
      };

      const storeTypeExist = async () => {
        if (!store) {
          const typeExist = await StoreType.findOne({ name: 'WEBSITE' });
          if (!typeExist)
            throw new Error('First create a StoreType named WEBSITE');

          const storeExist = await Store.findOne({ storeType: typeExist.id });
          if (!storeExist) throw new Error('First create a Store');

          return storeExist;
        }
        const storeExist = await Users.findById(store);
        if (!storeExist) throw new Error('Store does not exist');
        return storeExist;
      };

      const roleExist = await roleTypeExist();
      const storeExist = await storeTypeExist();

      const userExist = await Users.findById(id);
      if (!userExist) throw new Error('User does not exist');

      const hashedPassword = await bcryptjs.hash(password, 10);
      const user = await Users.findByIdAndUpdate(
        id,
        {
          ...input,
          password: password ? hashedPassword : userExist.password,
          role: roleExist.id,
          store: storeExist.id
        },
        { new: true }
      )
        .populate('role')
        .populate({
          path: 'store',
          populate: {
            path: 'storeType'
          }
        });
      return {
        ...user.toJSON(),
        role: roleExist,
        store: storeExist
      };
    }
  }
};

export default resolvers;
