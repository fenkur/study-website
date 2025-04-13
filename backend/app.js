import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import timerRouter from './routes/timer.route.js';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('api/timers', timerRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my Study Website!');
});

app.use(errorMiddleware);

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await connectToDatabase();
});

export default app;