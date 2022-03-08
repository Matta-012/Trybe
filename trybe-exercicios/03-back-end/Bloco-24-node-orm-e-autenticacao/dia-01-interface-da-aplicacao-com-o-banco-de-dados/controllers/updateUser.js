const User = require('../models/User');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  try {
    const result = await User.update(id, firstName, lastName, email, password);

    if (result.affectedRows < 1) {
      return res.status(404).json({
        error: true,
        message: 'Usuário não encontrado'
      });
    }
    return res.status(200).json({ id, firstName, lastName, email });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message
    });
  }
};
