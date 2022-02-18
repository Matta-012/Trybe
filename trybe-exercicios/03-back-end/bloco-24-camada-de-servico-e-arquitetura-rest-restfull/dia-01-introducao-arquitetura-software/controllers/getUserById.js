const User = require('../models/User');

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await User.getById(id);

    if (result.length < 1) {
      return res.status(200).json({
        error: true,
        message: "Usuário não encontrado"
      });
    } 
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message
    });
  }
};
