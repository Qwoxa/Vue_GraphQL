const express = require('express');
const graphqlHTTP = require('express-graphql');

require('dotenv').config();

const app = express();

app.use('/graphql', graphqlHTTP({

}));

app.listen(process.env.PORT, () => {
  console.log(`Listening on the port ${process.env.PORT}`);
});