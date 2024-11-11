import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/defaultdb';
const dbName = process.env.MONGO_DB_NAME || 'defaultdb';

app.use(bodyParser.json());

mongoose.connect(mongoUrl, {dbName: dbName})
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
// Routes
// Auth
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
// Users

export default app;