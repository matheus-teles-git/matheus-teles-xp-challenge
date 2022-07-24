import express from 'express';
import { user, asset, investment, authentication, all } from './routes';

const app = express();

app.use(express.json());

app.use('/conta', user)

app.use('/ativos', asset)

app.use('/investimentos', investment)

app.use('/', authentication)

app.use('/allassets', all)

export default app;