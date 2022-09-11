import { useState } from "react";
import { useTodo } from "~/src/contexts/TodoListContext";
import addZerosTo2DigitNumber from "~/src/utils/addZerosTo2DigitNumber";
import Box from "../core/Box";
import Text from "../core/Text";
import TodoForm from "./TodoForm";

type Props = {
  id: string;
  name: string;
  time: Date;
  isCurrent: string;
  setCurrent: any;
};

export default function TodoItem({id, name, time, isCurrent, setCurrent}: Props) {
  const { editTodoList } = useTodo();
  const [isFormOpen, setFormOpen] = useState(false);
  return (
    <>
      <Box display="flex">
        <Text marginRight="0.5rem">
          {addZerosTo2DigitNumber(time.getHours())} : {addZerosTo2DigitNumber(time.getMinutes())}
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
            let isConfirmed = confirm('삭제하시겠습니까?');

            if (isConfirmed) {
              editTodoList({
                type: 'delete',
                data: {
                  time,
                  id
                }
              });
            }
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
          closeForm={() => setFormOpen(false)}
        />
      )}
    </>
  );
};
