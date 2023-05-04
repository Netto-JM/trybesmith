import express from 'express';
import { orderRouter, productRouter, userRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
