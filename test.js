export const createUser = expressAsyncHandler(async (req, res) => {
  const data = {
    username: "Akibrot Samuel",
    email: "akibrotSamuelas@gmail.com",
    password: "1234",
    Team: [
      {
        username: "team Samuel",
        email: "team@gmail.com",
        password: "team",
        task: [
          { id: "121", title: "ui developemnt", comp: false },
          { id: "121", title: "backend developemnt", comp: false },
        ],
      },
      {
        username: "team kebede",
        email: "kebede@gmail.com",
        password: "kebede",
        task: [
          { id: "123", title: "system testing ", comp: false },
          { id: "124", title: "deployment", comp: false },
        ],
      },
    ],
    Project: [
      {
        Title: "Task system developemnt",
        Task: [
          { id: "121", title: "ui developemnt", comp: false },
          { id: "122", title: "backend developemnt", comp: false },
          { id: "123", title: "system testing ", comp: false },
          { id: "124", title: "deployment", comp: false },
        ],
      },
    ],
  };
  const demoProject = {
    Title: "android project",
    Task: [],
  };
  // { id: "121", title: "ui developemnt", comp: false },
  // { id: "122", title: "backend developemnt", comp: false },
  // { id: "123", title: "system testing ", comp: false },
  // { id: "124", title: "deployment", comp: false },
  //sign up page
  // const save = await MainUserModel.insertMany(data);

  //create Project

  if (save) {
    res.status(200).send("updated");
  }
});
