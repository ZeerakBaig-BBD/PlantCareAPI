require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  session: {
    secret: "Plant User",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 12 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
    },
  },
};
