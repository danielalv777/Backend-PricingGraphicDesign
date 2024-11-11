import mongoose from 'mongoose';

export interface Device {
  deveiceId: string;
  deviceName: string;
  isActive: boolean;
  lastActive: Date;
};

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
  phoneNumber: String,
  role: String,
  activeDevice: Array<Device>,
});

export const User = mongoose.model('User', userSchema);