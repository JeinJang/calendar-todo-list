import Box from "../core/Box";
import Text from "../core/Text";

const TodosHeader = ({ date }: { date: Date }) => (
  <Box>
    <Text as="h1" fontSize="48px" fontWeight="700">
      {date.getFullYear()}. {date.getMonth() + 1}. {date.getDate()}
    </Text>
  </Box>
);

export default TodosHeader;
