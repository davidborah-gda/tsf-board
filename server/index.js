const express = require('express');
const server = express();
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/404');
const path = require('path');

//setup environment variables
dotenv.config();

//connect to the database


//routers
const userRouter = require('./routers/Users');
const eventRouter = require('./routers/Events');
const adminEventRouter = require('./routers/AdminEvents');

// setup our port
const port = process.env.PORT || 9009;

// power ups (middleware)
server.use(helmet());
server.use(morgan("combined"));
server.use(bodyParser.json());  //accepts json data
server.use(bodyParser.urlencoded( { extended: true } ));  //accept html form data
const clientAppPath = path.resolve('client', 'build');
server.use(express.static(clientAppPath));


//routers
server.use('/api', userRouter);
server.use('/api', eventRouter);

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

//404 handler
server.use(notFoundHandler);
 //error handler
server.use(errorHandler);

// kick it off
server.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});