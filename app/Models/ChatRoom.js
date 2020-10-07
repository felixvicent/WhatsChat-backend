'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ChatRoom extends Model {
  requestUser() {
    return this.belongsTo('App/Models/User', 'request_user_id', 'id');
  }

  targetUser() {
    return this.belongsTo('App/Models/User', 'target_user_id', 'id');
  }
}

module.exports = ChatRoom
