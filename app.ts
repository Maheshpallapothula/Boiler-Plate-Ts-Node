import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './src/routes/user.route';
import { MESSAGES } from './src/utils/messages';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/health-check', (req, res) => {
    res.json({
        "message": MESSAGES.SUCCESS.HEALTH_CHECK
    })
})

// Routes
app.use('/api/users', userRoutes);

export default app;
