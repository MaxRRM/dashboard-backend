
class Server {

  main () {

    const express = require('express');
    const cors = require('cors');
    const dotenv = require('dotenv')

    const config = require('./config/config')


    const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

    const server = express();
    dotenv.config()
    const port = parseInt(config.appPort);



    // const whitelist = []
    // const options = {
    //   origin: (origin, callback) => {
    //     if (whitelist.includes(origin)) {
    //       callback(null, true);
    //     } else {
    //       callback(new Error('no permitido'));
    //     }
    //   }
    // }


    const db = require('./db/sequelize')
    const router = require('./network/routes')

    server.use(cors());
    server.use(express.json());

    db.connect()
    router(server)

    server.use(logErrors);
    server.use(boomErrorHandler);
    server.use(errorHandler);

    server.listen(port,()=>{
      console.log(`Running in PORT: ${port}`)
    })
  }
}

module.exports = Server
