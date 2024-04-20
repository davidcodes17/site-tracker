import { Flex, Text } from "@chakra-ui/react";

const DeviceDetails = ({
  topic,
  detail,
}: {
  topic: string;
  detail: string;
}) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Text>{topic} </Text>
      <Text fontSize={20} fontWeight={900}>
        {detail}
      </Text>
    </Flex>
  );
};

export default DeviceDetails;
