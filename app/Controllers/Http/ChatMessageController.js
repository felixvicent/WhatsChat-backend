'use strict'

/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} Model */
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type { Model } */
const ChatMessage = use('App/Models/ChatMessage');

/**
 * Resourceful controller for interacting with chatmessages
 */
class ChatMessageController {
  /**
   * Show a list of all messages of a room.
   * GET chatmessages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, params }) {
    const room_id = Number(params.room_id);

    const chatMessages = await ChatMessage.query().where('room_id', room_id).fetch();

    return chatMessages
  }

  /**
   * Create/save a new chatmessage.
   * POST chatmessages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const user_id = Number(auth.user.id);
    const { target_user_id, room_id, text } = request.only(['target_user_id', 'room_id', 'text']);

    const chatMessage = await ChatMessage.create({
      room_id,
      request_user_id: user_id,
      target_user_id,
      text,
      viewed: false,
    });

    return chatMessage;
  }
}

module.exports = ChatMessageController
