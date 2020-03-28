import bot from "../src/service/telegramApi";
module.exports = async (req, res) => {
  console.log("GOT THE DATA", req);
  const data = await bot.sendMessage(
    "@bayareanews",
    JSON.stringify(req.body || {})
  );
  res.status(200).send("success");
};
