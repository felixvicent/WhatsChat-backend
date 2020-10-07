'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with sessionrefreshes
 */
class SessionRefreshController {
  /**
   * Create/save a new sessionrefresh.
   * POST sessionrefreshes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only('refresh_token');

    const authData = await auth.newRefreshToken().generateForRefreshToken(data.refresh_token);

    await auth.revokeTokens(data.refreshToken, true);

    return {
      token: authData.token,
      refreshToken: authData.refreshToken,
    }
  }
}

module.exports = SessionRefreshController
