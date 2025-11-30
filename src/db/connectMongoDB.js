import mongoose from 'mongoose';

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    await mongoose.connect(mongoUrl, clientOptions);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};
