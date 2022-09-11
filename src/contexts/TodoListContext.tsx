import React, { useState, useCallback, useContext, createContext, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { editTodoListType, TodoListContextType } from '../types';


const TodoListContext = createContext({} as TodoListContextType);
export const useTodo = () => useContext(TodoListContext);

export default function TodoListContainer({ children }: {
  children: React.ReactNode
}) {
  const [todoList, setTodoList] = useState<any>({});
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const saveTodoList = useCallback(data => {
    setTodoList(data);
    localStorage.setItem('todos', JSON.stringify(data));
  }, []);

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      const data = JSON.parse(localStorage.getItem('todos'));

      setTodoList(data);
    }
  }, [])

  const editTodoList = useCallback(({ type, data }: editTodoListType) => {
    switch (type) {
      case 'create':
        let arr = [];
        if (todoList[data.time.toLocaleDateString()]) {
          arr = arr.concat(todoList[data.time.toLocaleDateString()], [{
            id: nanoid(),
            name: data.name,
            time: data.time.toISOString()
          }]);
        } else {
          arr = [{
            id: nanoid(),
            name: data.name,
            time: data.time.toISOString()
          }];
        }

        saveTodoList({
          ...todoList,
          [data.time.toLocaleDateString()]: arr,
        });
        localStorage.setItem
        return;
      case 'update':
        const updatedTodoList = todoList[data.time.toLocaleDateString()]?.map(
          item => {
            if (item.id === data.id) {
              return {
                id: data.id,
                name: data.name,
                time: data.time.toISOString()
              };
            }
            return item;
          }
        );
        saveTodoList({
          ...todoList,
          [data.time.toLocaleDateString()]: updatedTodoList,
        });
        return;
      case 'delete':
        const newTodo = todoList[data.time.toLocaleDateString()]?.filter(
          item => item.id !== data.id
        );
        saveTodoList({
          ...todoList,
          [data.time.toLocaleDateString()]: newTodo,
        });
        return;
    };
  }, [todoList, currentDate]);
  
  return (
    <TodoListContext.Provider
      value={{
        todoList,
        setTodoList,
        currentDate,
        setCurrentDate,
        editTodoList
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
