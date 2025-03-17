import express from "express";
const corporativeRouter = express.Router();
import {
  createMessage,
  getAllMessages,
  deleteMessage,
} from "../controllers/corporative.controller.js";


// 📌 Yeni mesaj oluştur
corporativeRouter.post("/", createMessage);

// 📌 Tüm mesajları getir
corporativeRouter.get("/", getAllMessages);

// 📌 Mesajı sil
corporativeRouter.delete("/:id", deleteMessage);

export default corporativeRouter;
