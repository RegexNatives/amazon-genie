import mongoose from "mongoose";

const orderHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    amount: {
      type: String,
    },
  },
  { timestamps: true }
);

const OrderHistory = mongoose.model("OrderHistory", orderHistorySchema);
export default OrderHistory;
