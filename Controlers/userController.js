const users = require("../database/models/userModels");

//impoted jwt after installing it
const jwt = require("jsonwebtoken");

//register controller after this register router is routed

exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      res.status(409).json("already existing user please login");
    } else {
      const newUser = new users({
        username,
        email,
        password,
        gitlink: "",
        linkdinlink: "",
        proimage: "",
      });

      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//login controller after this login router is routed
exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    let existingUser = await users.findOne({ email, password });
    if (existingUser) {
      //jwt.sign is used to generate encript the encripted code
      const token = jwt.sign(
        { userId: existingUser._id },
        process.env.JWTSECRETKEY
      );

      res.status(200).json({ user: existingUser, token: token });
    } else {
      res.status(401).json({ message: "invalid username/password" });
    }
  } catch (error) {
    res.status(500).json({ eooro: err });
  }
};
