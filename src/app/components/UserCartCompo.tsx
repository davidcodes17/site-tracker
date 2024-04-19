import { Flex } from '@chakra-ui/react'
import { User } from 'iconsax-react'
import React from 'react'
import { BiCart } from 'react-icons/bi'

const UserCartCompo = () => {
  return (
    <Flex alignItems={"center"} gap={5}>
        <BiCart size={30} />
        <User variant='Bold' />
    </Flex>
  )
}

export default UserCartCompo