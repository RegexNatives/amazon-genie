import mongoose from "mongoose";

const userBotFeedback = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    feedback: {
      type: String,
    },
    conversations: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserBotFeedback = mongoose.model("UserBotFeedback", userBotFeedback);
export default UserBotFeedback;
