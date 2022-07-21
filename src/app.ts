import express from 'express';
import { user, asset } from './routes';


const app = express();

app.use(express.json());

app.use('/conta', user)

app.use('/ativos', asset)


export default app;