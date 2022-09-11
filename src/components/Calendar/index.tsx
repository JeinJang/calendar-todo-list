import { useState } from "react";
import { useTodo } from "~/src/contexts/TodoListContext";
import Box from "../core/Box";
import Text from "../core/Text";
import CalendarHeader from "./CalendarHeader";
import CalendarItem from "./CalendarItem";

export default function Calendar() {
  const now = new Date();
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());

  const { currentDate, setCurrentDate } = useTodo();
  return (
    <Box
      padding="2rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flex="2"
    >
      <CalendarHeader
        year={currentYear}
        month={currentMonth + 1}
        onClickPreviousMonth={() => {
          const date = new Date(currentYear, currentMonth, 0);
          setCurrentMonth(date.getMonth());
          setCurrentYear(date.getFullYear());
        }}
        onClickNextMonth={() => {
          const date = new Date(currentYear, currentMonth + 2, 0);
          setCurrentMonth(date.getMonth());
          setCurrentYear(date.getFullYear());
        }}
      />
      <Box
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        gap="1px"
        width="100%"
        borderLeft="3px solid black"
        borderRight="3px solid black"
        borderBottom="3px solid black"
      >
        {/* 달력 빈 부분 채우는 코드 */}
        {Array.from({
          length: new Date(currentYear, currentMonth, 1).getDay()
        }, (v, i) => i + 1).map(
          val => (
            <CalendarItem
              key={`before ${currentMonth + 1}, ${val}`}
              isDate={false}
              gridColumnStart={`${val}`}
            />
          )
        )}
        {/* Date에서 date부분에 0을 넣으면 이전 달의 마지막을 return */}
        {Array.from({
          length: new Date(currentYear, currentMonth + 1, 0).getDate()
        }, (v, i) => new Date(currentYear, currentMonth, i + 1)).map(
          val => (
            <CalendarItem
              key={`${currentMonth + 1}월 ${val.getDate()}일`}
              date={val.getDate()}
              isSelected={currentDate.toLocaleDateString() === val.toLocaleDateString()}
              gridColumnStart={`${val.getDay() + 1}`}
              onClick={() => setCurrentDate(val)}
            />
          )
        )}
        {/* 달력 빈 부분 채우는 코드 */}
        {Array.from({
          length: 6 - new Date(currentYear, currentMonth + 1, 0).getDay()
        }, (v, i) => i + new Date(currentYear, currentMonth + 1, 0).getDay() + 2).map(
          val => (
            <CalendarItem
              key={`after ${currentMonth + 1}, ${val}`}
              isDate={false}
              gridColumnStart={`${val}`}
            />
          )
        )}
      </Box>
    </Box>
  );
};
