module.exports = (req, res, next) => {
  // checks if user is logged in
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }

  next();
};
