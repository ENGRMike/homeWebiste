const express = require("express");
var {graphqlHTTP} = require('express-graphql');


const app = express();

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));