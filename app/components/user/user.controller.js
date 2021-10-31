const boom = require('@hapi/boom');
const db = require("../../db/sequelize");
const { models } = db.sequelize;
//const userDB = require('./user.db')

class UserController {

  constructor(){
    this.users = [];
  }

  async create(user) {
    const newUser = await models.User.create(user);
    if(!newUser) {
      throw boom.serverUnavailable('unavailable');
    }
    return newUser
  }

  async findAll() {
      return await models.User.findAll();
  }

  async findOne(id) {
    const user =  await models.User.findByPk(id)
    if(!user){
      throw boom.notFound('user not found')
    }
    if(user.isBlock) {
      throw boom.conflict('user is blocked');
    }
    return user
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return {id}
  }
}

 module.exports = UserController;
