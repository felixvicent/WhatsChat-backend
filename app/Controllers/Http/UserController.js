'use strict'

/** @typedef {typeof import('@adonisjs/lucid/src/Lucid/Model')} Model */
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type { Model } */
const User = use('App/Models/User');

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password']);

    const user = User.create(data);

    return user;
  }
}

module.exports = UserController
