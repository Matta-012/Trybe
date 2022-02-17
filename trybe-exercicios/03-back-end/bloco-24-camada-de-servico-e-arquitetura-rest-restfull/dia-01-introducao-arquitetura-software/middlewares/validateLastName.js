const validateLastName = (req, res, next) => {
  const { lastName } = req.body;

  if (!lastName || lastName === '') {
    return res.status(400).json({
      error: true,
      message: 'O campo "lastName" é obrigatório',
    });
  }

  return next();
};

module.exports = validateLastName;
