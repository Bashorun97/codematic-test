import express from 'express';

import customErrorHandler from './middlewares/customErrorHandler';
import defaultErrorHandler from './middlewares/defaultErrorHandler';

import tzRouter from './routes';

const app = express();

app.use(express.json());

// Readiness probe
app.get("/", (req, res) => {
  res.send("OK");
});

app.use('/codematic', tzRouter);

app.use(customErrorHandler);
app.use(defaultErrorHandler);

export default app;
