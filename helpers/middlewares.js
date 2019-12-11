const createError = require('http-errors');
const passwordLengthMin = 6;


exports.isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) next();
  else next(createError(401));
};

exports.isNotLoggedIn = (req, res, next) => {
  console.log(req.body);
  if (!req.session.currentUser) next();
  else next(createError(403));
};

exports.validationLogin = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) next(createError(400));
  else next();
};

exports.validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (typeof password !== "string") next(createError(400))
  if (password.length < passwordLengthMin ) next(createError(400))
  else next()
};