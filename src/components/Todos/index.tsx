import { useState } from "react";
import Box from "../core/Box";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodosHeader from "./TodosHeader";

export default function Todos() {
  const currentDate = new Date();
  const [isOpen, setOpen] = useState(false);
  const [isCurrent, setCurrent] = useState(null);
  const [todoList, setTodoList] = useState(
    [
      {
        id: '1',
        name: '코딩 테스트 하기',
        time: new Date()
      },
      {
        id: '2',
        name: '코딩 테스트 하기',
        time: new Date()
      },
      {
        id: '3',
        name: '코딩 테스트 하기',
        time: new Date()
      }
    ]
  );
  
  return (
    <Box
      padding="0 1rem"
      display="flex"
      flexDirection="column"
      background="white"
      flex="1"
    >
      <TodosHeader date={currentDate} />
      <Box marginBottom="auto">
        {todoList.map(
          todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              time={todo.time}
              todoList={todoList}
              setTodoList={setTodoList}
              isCurrent={isCurrent}
              setCurrent={setCurrent}
            />
          )
        )}
      </Box>
      {isOpen && isCurrent==='create' && (
        <TodoForm
          date={currentDate}
          type="create"
          closeForm={() => setOpen(false)}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      )}
      <Box 
        as="button" 
        type="button" 
        onClick={() => {
          setCurrent('create');
          setOpen(true);
        }} 
        marginBottom="1rem"
      >
        Add
      </Box>
    </Box>
  );
};
