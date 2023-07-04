import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const EPBadge = ({ score }: Props) => {
  return (
    <Badge
      colorScheme={"green"}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default EPBadge;
