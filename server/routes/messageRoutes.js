import express from 'express';
import { protectedRoute } from '../middleware/authUser.js';
import { getMessages, getUserForSidebar, markedMessageSeen, sendMessage } from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.get('/users',protectedRoute, getUserForSidebar);
messageRouter.get('/:id',protectedRoute, getMessages);
messageRouter.put('/mark/:id',protectedRoute, markedMessageSeen);
messageRouter.post('/send/:id',protectedRoute, sendMessage);

export default messageRouter;