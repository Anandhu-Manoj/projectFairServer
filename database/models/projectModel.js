const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectImg: {
    type: "string",
    require: "true",
  },
  projectTitle: {
    type: "string",
    require: "true",
  },
  projectLanguage: {
    type: "string",
    require: "true",
  },

  projectOverview: {
    type: "string",
    require: "true",
  },
  projectGitLink: {
    type: "string",
    require: "true",
  },
  projectGitLink: {
    type: "string",
    require: "true",
  },
  userId: {
    type: "string",
    require: "true",
  },
});
const projects = mongoose.model("projects", projectSchema);
module.exports = projects;
