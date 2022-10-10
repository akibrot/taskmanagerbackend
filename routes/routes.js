import express from "express";
import {
  createProject,
  createUser,
  getProjects,
  getUsers,
  welcome,
  getSingleProject,
  createTask,
  deleteProject,
  getTask,
} from "../controllers/controllers.js";

const Routes = express.Router();

Routes.get("/welcome", welcome);
Routes.get("/", (req, res) => {
  res.send("server startted");
});
Routes.post("/createUser", createUser);
Routes.get("/getUsers", getUsers);
Routes.get("/getProjects", getProjects);
Routes.post("/createProject", createProject);
Routes.post("/createTask", createTask);
Routes.post("/deleteProject", deleteProject);
Routes.post("/getTask", getTask);

export default Routes;
