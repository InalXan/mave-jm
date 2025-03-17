import About from "../db/models/about.model.js";

// Yeni içerik ekleme
export const createContent = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newContent = new About({ title, description });
        await newContent.save();
        res.status(201).json(newContent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Tüm içerikleri getirme
export const getAllContent = async (req, res) => {
    try {
        const contents = await About.find();
        res.json(contents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// İçeriği güncelleme
export const updateContent = async (req, res) => {
    try {
        const { title, description } = req.body;
        const updatedContent = await About.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        );
        res.json(updatedContent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// İçeriği silme
export const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContent = await About.findByIdAndDelete(id);

    if (!deletedContent) {
        return res.status(404).json({ message: "Sayfa bulunamadı." });
    }

    res.json({ message: "Sayfa başarıyla silindi.", deletedContent });
} catch (err) {
    res.status(500).json({ message: "Sayfa silinirken hata oluştu." });
}
};
