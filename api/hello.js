module.exports = (req, res) => {
  const { name = "Jason" } = req.query;
  res.status(200).send(`Hello ${name}!`);
};
