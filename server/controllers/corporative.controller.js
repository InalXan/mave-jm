import Message from "../db/models/corporative.model.js";

// 📌 Mesaj Gönderme
export const createMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Mesaj başarıyla gönderildi!" });
  } catch (error) {
    res.status(500).json({ error: "Mesaj kaydedilirken hata oluştu" });
  }
};

// 📌 Tüm Mesajları Getir
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Mesajları alırken hata oluştu" });
  }
};

// 📌 Belirli Bir Mesajı Sil
export const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Mesaj başarıyla silindi!" });
  } catch (error) {
    res.status(500).json({ error: "Mesaj silinirken hata oluştu" });
  }
};
