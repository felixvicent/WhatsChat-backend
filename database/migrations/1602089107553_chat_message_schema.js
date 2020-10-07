'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatMessageSchema extends Schema {
  up () {
    this.create('chat_messages', (table) => {
      table.increments()
      table
        .integer('room_id')
        .unsigned()
        .references('id')
        .inTable('chat_rooms')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
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
      table.string('text')
      table.boolean('viewed')
      table.timestamps()
    })
  }

  down () {
    this.drop('chat_messages')
  }
}

module.exports = ChatMessageSchema
