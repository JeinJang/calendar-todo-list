import { Dispatch } from "react";

export type editTodoListType = {
  type: 'create'|'update'|'delete', 
  data: {
    time: Date,
    name?: string,
    id?: string,
  },
};

export type TodoListContextType = {
  todoList: any,
  setTodoList: Dispatch<any>,
  currentDate: any,
  setCurrentDate: Dispatch<any>,
  editTodoList: (evt: editTodoListType) => void,
};
