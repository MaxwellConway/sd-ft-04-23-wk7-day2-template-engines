const express = require("express");
const router = express.Router();
const ejs = require("ejs");

router.get("/user_data", (req, res) => {
  res.render("./user/user.ejs", { user: { name: "Elio" } });
});

router.get("/user_info", (req, res) => {
  res.render("./user/userInfo.ejs", { user: { name: "Wanda" } });
});

router.get("/user_about", (req, res) => {
  res.render("./user/userAbout.ejs", { user: { name: "Cyrus" } });
});

router.get("/display_all_users", (req, res) => {
  const userData = [
    {
      name: "Joe",
      address: "123 main st",
      city: "Tomball",
      zipcode: 77733,
    },
    {
      name: "Cameron",
      address: "12312 main st",
      city: "Atlanta",
      zipcode: 23232,
    },
    {
      name: "Matt",
      address: "123 willow st",
      city: "Houston",
      zipcode: 72733,
    },
  ];
  res.render("./user/displayAll.ejs", {
    userData: userData,
  });
});

module.exports = router;
