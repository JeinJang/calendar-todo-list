import Box from "../core/Box";
import TodoItem from "./TodoItem";
import TodosHeader from "./TodosHeader";

const todoList = [
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
];

export default function Todos() {
  const currentDate = new Date();
  
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
            />
          )
        )}
      </Box>
    </Box>
  );
};
