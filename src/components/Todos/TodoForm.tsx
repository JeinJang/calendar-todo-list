import { nanoid } from "nanoid";
import { useRef } from "react";
import Box from "../core/Box";
import Text from "../core/Text";

export default function TodoForm({
  date,
  type,
  time,
  name,
  id,
  closeForm,
  todoList,
  setTodoList,
}: {
  date: Date,
  type: 'create'|'update',
  time?: Date,
  name?: string,
  id?: string,
  closeForm: () => void,
  todoList: any,
  setTodoList?: any,
}) {
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
          defaultValue: `${`${time.getHours()}`.padStart(2, '0')}:${`${time.getMinutes()}`.padStart(2, '0')}`
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
            const newDate = new Date(`${date.getFullYear()}-${`${date.getMonth() + 1}`.padStart(2, '0')}-${`${date.getDate()}`.padStart(2, '0')}T${timeRef.current.value}:00`);
            const newName = nameRef?.current.value;
            

            let arr = [];
            if (type === 'create') {
              arr = arr.concat(todoList, [{
                id: nanoid(),
                name: newName,
                time: newDate,
              }]);
            } else {
              arr = todoList.map(
                item => {
                  if (item.id === id) {
                    return {
                      id,
                      name: newName,
                      time: newDate,
                    };
                  }
                  return item;
                }
              );
            }
            setTodoList(arr);
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
