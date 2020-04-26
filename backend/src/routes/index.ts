import { Router } from 'express';

import transactionRouter from './shortener.routes';

const routes = Router();

routes.use('/shortener', transactionRouter);

export default routes;
