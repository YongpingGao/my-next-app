import fetch from "isomorphic-unfetch";
module.exports = async (req, res) => {
  console.log("GOT THE DATA", req.body);

  res.status(200).send(req.body);

  //   const promise = await fetch(
  //     "https://api.covid19api.com/dayone/country/canada/status/confirmed"
  //   );
  //   const data = await promise.json();

  //   res.status(200).send(data.filter(country => country.Province === "Ontario"));
};
