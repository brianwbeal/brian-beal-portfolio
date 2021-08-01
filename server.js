/*
*
*  Express HTTP Server
*  makes the JSON in /db queryable at /graphql
* 
*/

/* Bring in dependencies */
const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server');
const db = require('./db');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

/* Instantiate Express app */
const app = express();

/* Middleware */
app.use(cors());

/* Redirect GET requests on the root route to /graphql */
app.get('/', (req, res) => res.redirect('graphql'));

/* Serve up JSON as queryable data at /graphql */
app.use('/graphql', jsonGraphqlExpress.default(db));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
