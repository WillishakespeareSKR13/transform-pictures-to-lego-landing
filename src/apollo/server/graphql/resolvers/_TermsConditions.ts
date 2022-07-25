import { Resolvers } from '@apollo/client';
import TermsConditions from '../../models/termsconditions';

const resolvers: Resolvers = {
  Query: {
    getTermsConditions: async () => {
      return await TermsConditions?.findOne();
    }
  },
  Mutation: {
    newUpdateTermsConditions: async (_, { input }) => {
      const { terms, conditions } = input;
      if (!terms || !conditions)
        throw new Error('Terms and conditions are required');
      const termsConditions = await TermsConditions?.findOne();
      if (!termsConditions)
        await TermsConditions?.create({ terms, conditions });
      await TermsConditions?.findOneAndUpdate({}, { terms, conditions });
      const getTermsConditions = await TermsConditions?.findOne();
      return getTermsConditions;
    }
  }
};

export default resolvers;
