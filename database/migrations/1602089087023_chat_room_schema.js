'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatRoomSchema extends Schema {
  up () {
    this.create('chat_rooms', (table) => {
      table.increments()
      table
        .integer('request_user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table
        .integer('target_user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('chat_rooms')
  }
}

module.exports = ChatRoomSchema
