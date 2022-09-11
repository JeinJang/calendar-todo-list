import Box from "../core/Box";
import Text from "../core/Text";

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

type Props = {
  year: Number;
  month: Number;
  onClickPreviousMonth: () => void;
  onClickNextMonth: () => void;
};

export default function CalendarHeader({
  year,
  month,
  onClickPreviousMonth,
  onClickNextMonth
}: Props) {
  return (
    <>
      <Text as="h1">{year}. {month}</Text>
      <Box display="flex" width="100%" marginBottom="1rem">
        <Box
          as="button"
          type="button"
          onClick={onClickPreviousMonth}
          marginLeft="auto"
        >
          이전 달
        </Box>
        <Box
          as="button"
          type="button"
          onClick={onClickNextMonth}
          marginLeft="0.5rem"
        >
          다음 달
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        width="100%"
        border="3px solid black"
      >
        {days.map(d => (
          <Box 
            key={d} 
            textAlign="center" 
            backgroundColor="#757575" 
            color="white"
          >
            <Text>{d}</Text>
          </Box>
        ))}
      </Box>
    </>        
  );
};
