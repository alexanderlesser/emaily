const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = (app) => {
  app.post("api/stripe", (req, res) => {
    console.log(req.body);
  });
};

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    // checks if a user is logged in.
    if (!req.user) {
      return res.status(401).send({ error: "You must be logged in!" });
    }
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for five credits",
      source: req.body.id,
    });
    // seting credits for current user
    req.user.credits += 5;
    // saving user
    const user = await req.user.save();

    res.send(user);
  });
};
