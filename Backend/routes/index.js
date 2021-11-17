const routerObras = require('./obrasRoutes.js');
const routerUsers = require('./usersRoutes.js');

function APIRouters(app) {
    app.use('/obras', routerObras);
    app.use('/Users', routerUsers);
}

module.exports = APIRouters;