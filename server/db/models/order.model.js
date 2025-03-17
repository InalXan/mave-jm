import { model, Schema } from "mongoose";

const orderSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: String, required: true },
  country: { type: String, required: true },
  work: { type: String, required: true },
  disableVisaData: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  married: { type: String, required: true },
  job: { type: String, required: true },
  careertime: { type: String, required: true },
  profit: { type: String, required: true },
  adventure: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = model("Order", orderSchema);
export default Order;
