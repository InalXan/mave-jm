import {Router} from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder
} from "../controllers/order.controller.js";

const orderRouter = Router();

orderRouter.get("/", getOrders);

orderRouter.post("/", createOrder);

orderRouter.get("/:id", getOrderById);

orderRouter.put("/:id", updateOrder);

orderRouter.delete("/:id", deleteOrder);

export default orderRouter;
