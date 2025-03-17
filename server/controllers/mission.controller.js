import Mission from "../db/models/mission.model.js";

// Yeni içerik ekleme
export const createMission = async (req, res) => {
  try {
    const { mission } = req.body;

    if (!mission) {
      return res.status(400).json({ error: "Misyon alanı boş olamaz." });
    }

    const newMission = await Mission.create({ mission });
    res.status(201).json({ message: "Misyon başarıyla eklendi.", newMission });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tüm içerikleri getirme
export const getAllMission = async (req, res) => {
  try {
    const missions = await Mission.find();

    if (!missions.length) {
      return res.status(404).json({ message: "Hiç misyon bulunamadı." });
    }

    res.status(200).json(missions);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// İçeriği güncelleme
export const updateMission = async (req, res) => {
  try {
    const { mission } = req.body;
    const { id } = req.params;

    if (!mission) {
      return res.status(400).json({ error: "Misyon alanı boş olamaz." });
    }

    const updatedMission = await Mission.findByIdAndUpdate(
      id,
      { mission },
      { new: true, runValidators: true }
    );

    if (!updatedMission) {
      return res.status(404).json({ error: "Misyon bulunamadı." });
    }

    res.status(200).json({ message: "Misyon başarıyla güncellendi.", updatedMission });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// İçeriği silme
export const deleteMission = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMission = await Mission.findByIdAndDelete(id);

    if (!deletedMission) {
      return res.status(404).json({ error: "Misyon bulunamadı." });
    }

    res.status(200).json({ message: "Misyon başarıyla silindi.", deletedMission });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
