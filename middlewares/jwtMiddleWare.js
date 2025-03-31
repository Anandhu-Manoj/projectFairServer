const jwt = require("jsonwebtoken");

const jsonVerify = (req, res, next) => {
  if (req.headers["authorization"]) {
    try {
      let token = req.headers["authorization"].split(" ")[1];

      let jwtResponse = jwt.verify(token, process.env.JWTSECRETKEY);
      req.userId = jwtResponse.userId;
      next();
    } catch (error) {
      res.status(403).json("please provide valid token");
    }
  } else {
    res.status(401).json("please login");
  }
};


module.exports=jsonVerify
