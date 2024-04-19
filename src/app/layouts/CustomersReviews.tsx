import { Box, Flex, Heading } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import React from "react";
import Review from "../components/Review";

const CustomersReviews = () => {
  return (
    <Box px={40}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading fontWeight={900} fontSize={50}>
          OUR HAPPY CUSTOMERS
        </Heading>
        <Flex gap={5}>
          <ArrowLeft size={40} />
          <ArrowRight size={40} />
        </Flex>
      </Flex>

      <Flex py={10} gap={10} overflowX={"scroll"} width={"100%"}>
        <Review
          name={"Sarah M."}
          review={
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
          }
        />
        <Review
          name={"Alex X."}
          review={
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
          }
        />
        <Review
          name={"James L."}
          review={
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
          }
        />
        <Review
          name={"Samantha D."}
          review={
            "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
          }
        />
        <Review
          name={"Ethan R."}
          review={
            "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
          }
        />
        <Review
          name={"Olivia P."}
          review={
            "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
          }
        />
        <Review
          name={"Liam K."}
          review={
            "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
          }
        />
        <Review
          name={"Ava H."}
          review={
            "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
          }
        />
      </Flex>
    </Box>
  );
};  

export default CustomersReviews;
