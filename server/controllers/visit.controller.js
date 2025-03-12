import Visit from "../db/models/visit.model.js";


export const trackVisit = async (req, res) => {
  try {
    if (req.isNewVisitor) {
      await Visit.create({ visitorId: req.visitorId });
    }

    const uniqueVisitors = await Visit.distinct("visitorId");
    res.json({ uniqueVisits: uniqueVisitors.length });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const getStats = async (req, res) => {
  try {
    const totalVisits = await Visit.countDocuments();
    const uniqueVisitors = await Visit.distinct("visitorId");

    res.json({ totalVisits, uniqueVisitors: uniqueVisitors.length });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
