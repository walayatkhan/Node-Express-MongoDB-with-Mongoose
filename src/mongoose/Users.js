const BaseQuery = require('./base-query');
const { UsersModel } = require('../models');




class Users extends BaseQuery{
constructor(){
    super('Users', UsersModel);
}
}

module.exports = new Users;