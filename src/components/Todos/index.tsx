import { useState } from "react";
import { useTodo } from "~/src/contexts/TodoListContext";
import Box from "../core/Box";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodosHeader from "./TodosHeader";

export default function Todos() {
  const { todoList, currentDate }: { todoList: any, currentDate: Date } = useTodo();
  const [isOpen, setOpen] = useState(false);
  const [isCurrent, setCurrent] = useState(null);
  
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
        {todoList[currentDate.toLocaleDateString()]?.sort(
          function (a, b) {
            return new Date(a.time) >= new Date(b.time) ? 1 : -1;
          }
        ).map(
          todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              time={new Date(todo.time)}
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
