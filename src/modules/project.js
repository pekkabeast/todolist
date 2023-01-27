/* Functionality of projects
- project should have a name
- should store tasks
*/

const project = (name) => {
  //For storage, keys will be project name and values will be the tasks
  const __name = name;
  const __tasks = [];

  const getName = () => __name;

  const changeName = (newName) => {
    __name = newName;
  };

  const addTask = (taskObject) => {
    __tasks.append(taskObject);
  };

  const getAllTasks = () => tasks;

  const getTodayTasks = () => {};

  const getFutureTasks = () => {};

  return {
    getName,
    changeName,
    addTask,
    getTodayTasks,
    getFutureTasks,
    getAllTasks,
  };
};
