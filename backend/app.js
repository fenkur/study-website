import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my Study Website!');
});

app.use(errorMiddleware);

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await connectToDatabase();
});

export default app;