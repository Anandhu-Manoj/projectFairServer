const express = require("express");
const jwt = require("../middlewares/jwtMiddleWare");
const multerMiddleware = require("../middlewares/multerMiddleware");

const userController = require("../Controlers/userController");
const projectController = require("../Controlers/projectController");

const router = new express.Router();

router.post("/register", userController.registerController);

router.post("/login", userController.loginController);
router.post(
  "/addproject",
  jwt,
  multerMiddleware.single("projectImg"),
  projectController.addProjects
);

router.get("/homeProjects", projectController.getHomeProjects);

module.exports = router;

router.get("/getAllProjects", jwt, projectController.getAllProjects);

router.get("/speceficProjects", jwt, projectController.userSpeceficProjects);
