const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require('graphql-import')
const logger = require("pino")();

const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs: importSchema('./graphql/schema/index.graphql'),
  resolvers,
});

server.listen().then(({ url }) => {
  logger.info(`Server is running: ${url}`);
});
