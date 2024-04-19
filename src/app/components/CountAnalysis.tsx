import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const CountAnalysis = () => {
  return (
    <Flex mt={5} alignItems={"center"}>
        <Box pr={5}>
            <Heading fontSize={50}>200+</Heading>
            <Text>International Brands</Text>
        </Box>
        <Box borderLeft={"1px solid #aaa"} borderRight={"1px solid #aaa"} px={5}>
            <Heading fontSize={50}>2,000+</Heading>
            <Text>High Quality Products</Text>
        </Box>
        <Box pl={5}>
            <Heading fontSize={50}>30,000+</Heading>
            <Text>Happy Customers</Text>
        </Box>
    </Flex>
  )
}

export default CountAnalysis