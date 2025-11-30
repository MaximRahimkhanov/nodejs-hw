import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import notesRoutes from './routes/notesRoutes.js';
const PORT = process.env.PORT;
const app = express();

await connectMongoDB();

app.use(logger);
app.use(express.json());
app.use(cors());

app.use('/notes', notesRoutes);

app.use(notFoundHandler);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
