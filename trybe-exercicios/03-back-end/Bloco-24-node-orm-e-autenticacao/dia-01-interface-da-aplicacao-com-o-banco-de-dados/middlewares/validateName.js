const validateName = (req, res, next) => {
  const { firstName } = req.body;

  if (!firstName || firstName === '') {
    return res.status(400).json({
      error: true,
      message: 'O campo "firstName" é obrigatório',
    });
  }

  return next();
};

module.exports = validateName;
