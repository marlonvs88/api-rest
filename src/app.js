import express from 'express'
const app = express()
app.use(express.json()) //indica para o express ler body com json
import routers from './routes.js';

// usar o router
app.use(routers);

export default app;
