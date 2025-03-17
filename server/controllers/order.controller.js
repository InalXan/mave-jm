import Order from '../db/models/order.model.js';

export const createOrder = async (req, res) => {
  try {
    const {
      name,
      surname,
      age,
      country,
      work,
      disableVisaData,
      email,
      phone,
      married,
      job,
      careertime,
      profit,
      adventure,
    } = req.body;

    const newOrder = new Order({
      name,
      surname,
      age,
      country,
      work,
      disableVisaData,
      email,
      phone,
      married,
      job,
      careertime,
      profit,
      adventure,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
};
