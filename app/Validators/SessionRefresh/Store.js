'use strict'

class SessionRefresh {
  get rules () {
    return {
      refresh_token: 'required|string',
    }
  }

  get messages(){
    return {
      'refresh_token.required': 'O campo refresh_token é obrigatório',
      'refresh_token.string': 'O campo refresh_token deve ser do tipo string',
    }
  }

  async fails(errorMessages){
    return this.ctx.response.status(400).send({
      error: errorMessages[0],
    });
  }
}

module.exports = SessionRefresh
