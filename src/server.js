import express from 'express';
import 'dotenv/config';
import { logger } from './middleware/logger.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/authRoutes.js';
import notesRoutes from './routes/notesRoutes.js';
import { errors } from 'celebrate';
import { connectMongoDB } from './db/connectMongoDB.js';

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(logger);
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(authRoutes);
app.use(notesRoutes);

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

await connectMongoDB();
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
