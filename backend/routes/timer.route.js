import express from 'express';
import { createTimer, getTimers } from '../controllers/timer.controller.js';
import authorize from '../middleware/auth.middleware.js';

const timerRouter = express.Router();

timerRouter.post('/', authorize, createTimer);
timerRouter.get('/', authorize, getTimers);

export default timerRouter;