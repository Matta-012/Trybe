const User = require('../models/User');

module.exports = async (_req, res) => {
  try {
    const result = await User.getAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message
    });
  }
};
