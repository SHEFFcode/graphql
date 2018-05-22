const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

app.use('/graphql', expressGraphQL({
  schema, // graphQL schema
  graphiql: true // only intended to be used in a dev environment
}));

app.listen(4000, () => console.log('Listening on port 4000...'));
