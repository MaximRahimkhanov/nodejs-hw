import mongoose from 'mongoose';
import { Note } from '../models/note.js';

const clientOptions = {
  serverApi: { version: '1', strict: false, deprecationErrors: true },
};

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    await mongoose.connect(mongoUrl, clientOptions);
    console.log('✅ MongoDB connection established successfully');
    await Note.syncIndexes();
    console.log('Indexes synced successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};
