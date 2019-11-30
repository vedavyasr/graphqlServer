import mongoose from 'mongoose';
export const Post = mongoose.model('Post', {
  title: String,
  description: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
