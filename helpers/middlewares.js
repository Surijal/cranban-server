const createError = require('http-errors');

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
