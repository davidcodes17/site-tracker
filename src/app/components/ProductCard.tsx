import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BiStar } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const ProductCard = ({
  id,
  name,
  rating,
  image,
  price,
}: {
  id: Number;
  name: string;
  rating: Number;
  image: string;
  price: Number;
}) => {
  const rate = Number(rating);
  return (
    <Box className="card" width={{lg : "fit-content", md : "fit-content", sm : 150, base: 150}}>
      <Image src={image} width={{lg : "100%", md : "100%", sm : "100%", base : "100%" }} borderRadius={20} />
      <Text pt={5} fontSize={{lg : 15, md : 12, sm : 12, base : 12}} fontWeight={700}>
        {name}
      </Text>
      <Flex py={2}>
        <FaStar color="#FFC633" />
        <FaStar color="#FFC633" />
        <FaStar color="#FFC633" />
        <BiStar color="#FFC633" />
      </Flex>
      <Text fontSize={20} fontWeight={800}>
        {`$ ${price}`}
      </Text>
    </Box>
  );
};

export default ProductCard;
