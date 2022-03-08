const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email || email === '') {
    return res.status(400).json({
      error: true,
      message: 'O campo "email" é obrigatório',
    });
  }

  return next();
};

module.exports = validateEmail;
