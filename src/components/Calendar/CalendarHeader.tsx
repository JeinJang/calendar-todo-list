import Box from "../core/Box";
import Text from "../core/Text";

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
    </>        
  );
};
