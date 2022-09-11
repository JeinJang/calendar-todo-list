import { useState } from "react";
import Box from "../core/Box";
import Text from "../core/Text";

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
      <Box
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        width="100%"
      >
        {/* Date에서 date부분에 0을 넣으면 이전 달의 마지막을 return */}
        {Array.from({
          length: new Date(currentYear, currentMonth + 1, 0).getDate()
        }, (v, i) => new Date(currentYear, currentMonth, i + 1)).map(
          val => (
            <Box
              key={`${currentMonth}월 ${val}일`}
              gridColumnStart={`${val.getDay() + 1}`}
            >
              <Text>{val.getDate()}</Text>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};
