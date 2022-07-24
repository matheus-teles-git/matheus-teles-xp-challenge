import express from 'express';
import { user, asset, investment, authentication, all } from './routes';
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerConfig from './docs/swagger.config';
import swaggerUI from 'swagger-ui-express';

const app = express();

app.use(express.json());

app.use('/conta', user)

app.use('/ativos', asset)

app.use('/investimentos', investment)

app.use('/', authentication)

app.use('/allassets', all)

const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs',swaggerUI.serve, swaggerUI.setup(swaggerDoc))

export default app;