import { ApolloServer } from 'apollo-server-micro';
import jwt from 'jsonwebtoken';
import schema from '@ApolloServer/graphql/schema';
import connectMongo from '@ApolloServer/middlewares/database';

connectMongo();

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    if (!token) return { user: null };
    try {
      const user = jwt.verify(token.replace('Bearer ', ''), 'LEGOSECRET');
      return { user };
    } catch (err) {
      return { user: null };
    }
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });
