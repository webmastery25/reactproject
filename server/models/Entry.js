import mongoose from 'mongoose';

const EntrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Entry', EntrySchema);