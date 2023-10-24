import mongoose from "mongoose";

const UserNatureSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    nature: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserNature = mongoose.model("UserNature", UserNatureSchema);
export default UserNature;
