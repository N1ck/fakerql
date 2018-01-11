const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { formatError } = require('apollo-errors');
const cors = require('cors');
const jwt = require('express-jwt');
const faker = require('faker/locale/en');
const compression = require('compression');
const next = require('next');

const typeDefs = require('./server/typeDefs');
const resolvers = require('./server/resolvers');
const initQuery = require('./server/initQuery');

const {
  JWT_SECRET = 'bufb73f3f084f3487f7803fn30f34bf0n3fb3f83',
  PORT = 5000
} = process.env;

const port = parseInt(PORT);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.disable('x-powered-by');
    server.use(compression());
  }

  server.use(cors());

  server.use(
    '/graphql',
    jwt({
      secret: JWT_SECRET,
      credentialsRequired: false
    }),
    bodyParser.json(),
    graphqlExpress(req => ({
      formatError,
      schema,
      context: {
        jwtSecret: JWT_SECRET,
        faker,
        user: req.user
      }
    }))
  );

  server.get(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
      query: initQuery
    })
  );

  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, err => {
    if (err) throw err;

    console.log(`Listening on PORT ${PORT}`);
  });
});
