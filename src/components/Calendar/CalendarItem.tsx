import Box from "../core/Box";
import Text from "../core/Text";

type Props = {
  date: number;
  isSelected?: boolean;
  gridColumnStart: string;
  onClick?: () => void;
};

export default function CalendarItem({
  date,
  isSelected=true,
  gridColumnStart,
  onClick
}: Props) {
  return (
    <Box
      background={isSelected ? 'purple' : 'white'}
      gridColumnStart={gridColumnStart}
    >
      <Text>
        {date}
      </Text>
    </Box>
  );
};
