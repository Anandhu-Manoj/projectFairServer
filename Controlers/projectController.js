const project = require("../database/models/projectModel");

exports.addProjects = async (req, res) => {
  const userId = req.userId;
  const {
    projectTitle,
    projectLanguage,
    projectOverview,
    projectGitLink,
    projectWebsiteLink,
  } = req.body;

  const projectImg = req.file.filename;
  console.log(req.file);

  try {
    let existingProject = await project.findOne({ projectGitLink });
    if (existingProject) {
      res.status(409).json("Project Already Exists");
    } else {
      const newProject = new project({
        projectImg,
        projectTitle,
        projectLanguage,
        projectGitLink,
        projectOverview,
        projectWebsiteLink,
        userId,
      });

      await newProject.save();
      res.status(201).json(newProject);
    }
  } catch (err) {
    res.status(500).json("error occured");
  }
};

exports.getHomeProjects = async (req, res) => {
  console.log("reached");
  try {
    let data = await project.find().limit(3);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllProjects = async (req, res) => {
  let { search } = req.query;

  try {
    let data = await project.find({
      projectLanguage: { $regex: search, $options: 'i' },
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.userSpeceficProjects = async (req, res) => {
  let userId = req.userId;
  try {
    let data = await project.find({ userId });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
