import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Box width={"fit-content"}>
        <Image borderRadius={40} src='/SHOP.CO.svg' width={{lg : "100px", md : "200px", sm : "100px", base : "100px"}} />
    </Box>
  )
}

export default Logo