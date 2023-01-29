/* Factory function for creating tasks
- holds data specific to task

Parameters:
- title
- description
- dueDate
- priority

*/
//function with private variables
const tasks = (title, description, dueDate, priority) => {
  let __title = title;
  let __description = description;
  let __dueDate = dueDate;
  let __priority = priority;

  const getTitle = () => __title;
  const getDescription = () => __description;
  const getDueDate = () => __dueDate;
  const getPriority = () => __priority;

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

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
  };
};

export { tasks };
