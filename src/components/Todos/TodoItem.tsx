import Box from "../core/Box";
import Text from "../core/Text";

type Props = {
  id: string;
  name: string;
  time: Date;
};

export default function TodoItem({id, name, time}: Props) {
  return (
    <Box display="flex">
      <Text marginRight="0.5rem">
        {`${time.getHours()}`.padStart(2, '0')} : {`${time.getMinutes()}`.padStart(2, '0')}
      </Text>
      <Text>{name}</Text>
      <Box
        type="button"
        as="button"
        onClick={() => {}}
        padding="0"
        margin="auto 0 auto auto"
      >
        수정
      </Box>
      <Box
        type="button"
        as="button"
        onClick={() => {}}
        padding="0"
        margin="auto 0 auto 1rem"
      >
        삭제
      </Box>
    </Box>
  );
};
