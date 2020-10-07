'use strict'

class SessionStore {
  get rules () {
    return {
      email: 'required|email|string',
      password: 'required|min:6'
    }
  }

  get messages(){
    return {
      'email.required': 'O campo email é obrigatório',
      'email.string': 'O campo email deve ser do tipo string',
      'email.email': 'Formato de e-mail inválido',

      'password.required': 'O campo password é obrigatório',
      'password.min': 'O campo password deve ter no mínimo 6 caracteres',
    }
  }

  async fails(errorMessages){
    return this.ctx.response.status(400).send({
      error: errorMessages[0],
    });
  }
}

module.exports = SessionStore
