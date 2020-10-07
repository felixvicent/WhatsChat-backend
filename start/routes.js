'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.store').validator('User/Store');
Route.post('/sessions', 'SessionController.store').validator('Session/Store');

Route.post('/session_refresh', 'SessionRefreshController.store').validator('SessionRefresh/Store');


Route.group(() => {
  Route.get('/chat_rooms', 'ChatRoomController.index');
  Route.post('/chat_rooms', 'ChatRoomController.store').validator('ChatRoom/Store');

  Route.get('/chat_messages/:room_id', 'ChatMessageController.index');
  Route.post('/chat_messages', 'ChatMessageController.store').validator('ChatMessage/Store');
}).middleware(['auth']);
