const userRoutes = require('./user.router');
const roleRoutes = require('./role.router');
const config = require('../config.json');

const apiRoutes = [
    {
        path: config[process.env.NODE_ENV].apiBasePath + "/user",
        router: userRoutes
    },
    {
        path: config[process.env.NODE_ENV].apiBasePath + "/role",
        router: roleRoutes
    }
]

module.exports = apiRoutes;