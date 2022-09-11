import { useState } from "react";
import Box from "../core/Box";
import Text from "../core/Text";
import TodoForm from "./TodoForm";

type Props = {
  id: string;
  name: string;
  time: Date;
  todoList: any;
  setTodoList?: any;
  isCurrent: string;
  setCurrent: any;
};

export default function TodoItem({id, name, time, todoList, setTodoList, isCurrent, setCurrent}: Props) {
  const [isFormOpen, setFormOpen] = useState(false);
  return (
    <>
      <Box display="flex">
        <Text marginRight="0.5rem">
          {`${time.getHours()}`.padStart(2, '0')} : {`${time.getMinutes()}`.padStart(2, '0')}
        </Text>
        <Text>{name}</Text>
        <Box
          type="button"
          as="button"
          onClick={() => {
            setCurrent(id);
            setFormOpen(true);
          }}
          padding="0"
          margin="auto 0 auto auto"
        >
          수정
        </Box>
        <Box
          type="button"
          as="button"
          onClick={() => {
            const newTodo = todoList.filter(
              item => item.id !== id
            );
            setTodoList(newTodo)
          }}
          padding="0"
          margin="auto 0 auto 1rem"
        >
          삭제
        </Box>
      </Box>
      {isFormOpen && isCurrent===id && (
        <TodoForm
          date={time}
          time={time}
          name={name}
          id={id}
          type="update"
          todoList={todoList}
          setTodoList={setTodoList}
          closeForm={() => setFormOpen(false)}
        />
      )}
    </>
  );
};
