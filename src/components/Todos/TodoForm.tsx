import { nanoid } from "nanoid";
import { useRef } from "react";
import { useTodo } from "~/src/contexts/TodoListContext";
import addZerosTo2DigitNumber from "~/src/utils/addZerosTo2DigitNumber";
import Box from "../core/Box";
import Text from "../core/Text";

export default function TodoForm({
  date,
  type,
  time,
  name,
  id,
  closeForm,
}: {
  date: Date,
  type: 'create'|'update',
  time?: Date,
  name?: string,
  id?: string,
  closeForm: () => void,
}) {
  const { editTodoList } = useTodo();
  const timeRef = useRef(null);
  const nameRef = useRef(null)
  return (
    <Box
      margin="1rem"
      padding="0.5rem"
      display="flex"
      flexDirection="column"
      border="2px solid black"
      background="white"
    >
      <Text>{date.toLocaleDateString()}</Text>
      <Box
        as="input"
        type="time"
        ref={timeRef}
        {...time && {
          defaultValue: `${addZerosTo2DigitNumber(time.getHours())}:${addZerosTo2DigitNumber(time.getMinutes())}`
        }}
        marginTop="1rem"
      />
      <Box 
        as="input" 
        ref={nameRef} 
        {...name && { defaultValue: name }} 
        marginTop="1rem" 
      />
      <Box 
        as="button" 
        type="button"
        margin="2rem 0 0.5rem 0"
        width="100%"
        onClick={() => {
          if (timeRef.current.value && nameRef.current.value) {
            const newDate = new Date(`${date.getFullYear()}-${addZerosTo2DigitNumber(date.getMonth() + 1)}-${addZerosTo2DigitNumber(date.getDate())}T${timeRef.current.value}:00`);
            const newName = nameRef?.current.value;
            
            editTodoList({
              type,
              data: {
                time: newDate,
                name: newName,
                id: id || null,
              }
            })
            closeForm();
          } else if (!timeRef.current.value && nameRef.current.value) {
            alert('시간을 입력해주세요!');
          } else if (timeRef.current.value && !nameRef.current.value) {
            alert('일정을 입력해주세요!');
          } else {
            alert('시간 및 일정을 입력해주세요!');
          }
        }}
      >
        {type==='create' ? '생성' : '수정'}
      </Box>
    </Box>
  );
};
