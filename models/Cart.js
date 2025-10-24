import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
        min: 1,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
cartSchema.pre("save", async function (next) {
  await this.populate("items.product", "price");

  let total = 0;
  this.items.forEach((item) => {
    total += item.quantity * item.product.price;
  });

  this.totalPrice = total;
  next();
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
