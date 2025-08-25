const { router } = require('./rout');
const { routerUser } = require('./routerUser');
const {routerEditUsers } = require('./routerEditUser');
const { deleteRout } = require('./deleteRout');

module.exports = {
    router,
    routerUser,
    routerEditUsers,
    deleteRout
}