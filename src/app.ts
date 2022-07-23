import express from 'express';
import { user, asset, investment } from './routes';


const app = express();

app.use(express.json());

app.use('/conta', user)

app.use('/ativos', asset)

app.use('/investimentos', investment)


export default app;