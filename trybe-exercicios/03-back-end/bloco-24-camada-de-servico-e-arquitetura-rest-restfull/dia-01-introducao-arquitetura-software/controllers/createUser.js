const User = require('../models/User');

module.exports = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const result = await User.create(firstName, lastName, email, password);
    return res.status(201).json({ id: result.insertId, firstName, lastName, email });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message
    });
  }
};
