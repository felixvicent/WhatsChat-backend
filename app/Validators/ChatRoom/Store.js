'use strict'

class ChatRoomStore {
  get rules () {
    return {
      target_user_id: 'required|integer'
    }
  }

  get messages(){
    return {
      'target_user_id.required': 'O campo target_user_id é obrigatório',
      'target_user_id.integer': 'O campo password deve ser do tipo inteiro',
    }
  }

  async fails(errorMessages){
    return this.ctx.response.status(400).send({
      error: errorMessages[0],
    });
  }
}

module.exports = ChatRoomStore
