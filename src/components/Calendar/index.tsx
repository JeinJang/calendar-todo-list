import { useState } from "react";
import Box from "../core/Box";
import Text from "../core/Text";
import CalendarHeader from "./CalendarHeader";
import CalendarItem from "./CalendarItem";

export default function Calendar() {
  const now = new Date();
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());

  return (
    <Box
      padding="2rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flex="1"
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
        {/* Date에서 date부분에 0을 넣으면 이전 달의 마지막을 return */}
        {Array.from({
          length: new Date(currentYear, currentMonth + 1, 0).getDate()
        }, (v, i) => new Date(currentYear, currentMonth, i + 1)).map(
          val => (
            <CalendarItem
              key={`${currentMonth}월 ${val.getDate()}일`}
              date={val.getDate()}
              isSelected={now.toLocaleDateString() === val.toLocaleDateString()}
              gridColumnStart={`${val.getDay() + 1}`}
            />
          )
        )}
      </Box>
    </Box>
  );
};
