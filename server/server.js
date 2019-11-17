const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Connect to db
(async () => {
  try {
    const URI = 'mongodb://localhost:27017/graphql';
    const options = { useUnifiedTopology: true, useNewUrlParser: true };
    await mongoose.connect(URI, options);
    console.log('DB connected');
  } catch(error) {
    console.log(`DB connection error`, error);
  }
})();

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(process.env.PORT, () => {
  console.log(`Listening on the port ${process.env.PORT}`);
});