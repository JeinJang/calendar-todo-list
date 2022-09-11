import Box from "../core/Box";
import Text from "../core/Text";

type Props = {
  date?: number;
  isSelected?: boolean;
  isDate?: boolean;
  gridColumnStart: string;
  onClick?: () => void;
};

export default function CalendarItem({
  date,
  isSelected=false,
  isDate=true,
  gridColumnStart,
  onClick
}: Props) {
  return (
    <Box
      background={isSelected ? 'purple' : 'white'}
      border="none"
      textAlign="left"
      gridColumnStart={gridColumnStart}
      {...isDate && {
        as: 'button',
        type: 'button',
        onClick
      }}
    >
      {isDate && <Text>{date}</Text>}
    </Box>
  );
};
