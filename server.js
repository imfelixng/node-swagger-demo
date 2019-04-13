const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');


const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swaggers/swagger.json');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', userRoute);

mongoose.connect('mongodb://localhost:27017/node-swagger',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connect mongodb successfully!');
  })
  .catch(err => console.log(err));

app.listen(3000, () => console.log('Server is running at port 3000'));