/* Factory function for creating tasks
- holds data specific to task

Parameters:
- title
- description
- dueDate
- priority

*/
//function with private variables
const tasks = (title, description, dueDate, priority, project) => {
  let __title = title;
  let __description = description;
  let __dueDate = dueDate;
  let __priority = priority;
  let __project = project;

  const getTitle = () => __title;
  const getDescription = () => __description;
  const getDueDate = () => __dueDate;
  const getPriority = () => __priority;
  const getProject = () => __project;

  const setTitle = (newTitle) => {
    __title = newTitle;
  };

  const setDescription = (newDescription) => {
    __description = newDescription;
  };

  const setDueDate = (newDueDate) => {
    __dueDate = newDueDate;
  };

  const setPriority = (newPriority) => {
    __priority = newPriority;
  };

  function toJSON() {
    return { title, description, dueDate, priority, project };
  }

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getProject,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    toJSON,
  };
};

export { tasks };
