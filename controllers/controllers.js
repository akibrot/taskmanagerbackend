import expressAsyncHandler from "express-async-handler";
import ProjectModel from "../models/ProjectModel.js";
import Users from "../models/UserModel.js";

export const welcome = expressAsyncHandler((req, res) => {
  res.send("welcome");
});
//create user controller
export const createUser = expressAsyncHandler(async (req, res) => {
  const save = await Users.insertMany(req.body);
  if (save) {
    res.status(200).send("user account created");
    console.log("saved");
  }
});

//getUsers
export const getUsers = expressAsyncHandler(async (req, res) => {
  const save = await Users.find();
  if (save) {
    res.status(200).send(save);
  }
});

//createProject
export const createProject = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const save = await ProjectModel.insertMany(req.body);
  if (save) {
    res.status(200).send("Project created");
    console.log("Project created");
  }
});
//delete project
export const deleteProject = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const deleteproject = await ProjectModel.findOneAndDelete({Title:req.body.Title});
  if (deleteproject) {
    res.status(200).send("Project deleted");
    console.log("Project deleted");
  }
});
//get projects
export const getProjects = expressAsyncHandler(async (req, res) => {
  const save = await ProjectModel.find();
  if (save) {
    res.status(200).send(save);
  }
});
//getTask
export const getTask = expressAsyncHandler(async (req, res) => {
  console.log("get single task")
const id=req.body.id
console.log(id)

  const save = await ProjectModel.findById({_id:id});
  if (save) {
    res.status(200).send(save.Task);
  }
});
//get single project
export const getSingleProject = expressAsyncHandler(async (req, res) => {
  console.log(req.body)
  const save = await ProjectModel.findById(req.body);
  if (save) {
    res.status(200).send(save);
  }
});
//insert into project
export const createTask = expressAsyncHandler(async (req, res) => {
  console.log("task model");
  console.log(req.body)
  const id=req.body.id
  
  const findProject = await ProjectModel.findOneAndUpdate({_id:id},{$push: { Task: req.body },});
 
  // console.log(save)
  if (findProject) {
    // const savetoarry = await ProjectModel.updateOne({id},{$push: { Task: req.body },});
    // if(savetoarry){
      console.log('task pushed')
    // }

  }
});
