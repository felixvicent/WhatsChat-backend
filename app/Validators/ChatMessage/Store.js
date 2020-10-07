'use strict'

class ChatMessageStore {
  get rules () {
    return {
      room_id: 'required|integer',
      target_user_id: 'required|integer',
      text: 'required|string',
    }
  }

  get messages(){
    return {
      'room_id.required': 'O campo room_id é obrigatório',
      'room_id.integer': 'O campo password deve ser do tipo inteiro',

      'target_user_id.required': 'O campo target_user_id é obrigatório',
      'target_user_id.integer': 'O campo password deve ser do tipo inteiro',

      'text.required': 'O campo text é obrigatório',
      'text.string': 'O campo password deve ser do tipo string',
    }
  }

  async fails(errorMessages){
    return this.ctx.response.status(400).send({
      error: errorMessages[0],
    });
  }
}

module.exports = ChatMessageStore
