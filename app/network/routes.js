const express = require('express')
const user = require('../components/user/user.routes');


const routes = function (server) {
    const router = express.Router()
    server.use('/api', router);
    router.use('/users', user);
}

module.exports = routes;
