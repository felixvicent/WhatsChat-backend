'use strict'

/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} Model */
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type { Model } */
const ChatRoom = use('App/Models/ChatRoom');

/**
 * Resourceful controller for interacting with chatrooms
 */
class ChatRoomController {
  /**
   * Show a list of user.
   * GET chatrooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const user_id = Number(auth.user.id);

    const chatRooms = await ChatRoom
      .query()
      .where('request_user_id', user_id)
      .orWhere('target_user_id', user_id)
      .fetch();

    return chatRooms;    
  }

  /**
   * Create/save a new chatroom.
   * POST chatrooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const user_id = Number(auth.user.id);

    const { target_user_id } = request.only(['target_user_id']);

    const chatRoom = await ChatRoom.create({
      request_user_id: user_id,
      target_user_id,
    });

    return chatRoom;
  }
}

module.exports = ChatRoomController