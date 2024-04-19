import { Box } from "@chakra-ui/react"
import Header from "./layouts/Header"
import Hero from "./layouts/Hero"
import NewArrival from "./layouts/NewArrival"

const page = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <NewArrival />
    </Box>
  )
}

export default page