import express from 'express';
import user from './routes';

const app = express();

app.use(express.json());

app.use('/conta', user)

export default app;