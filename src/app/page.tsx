import { Box } from "@chakra-ui/react"
import Header from "./layouts/Header"
import Hero from "./layouts/Hero"
import NewArrival from "./layouts/NewArrival"
import DressStyle from "./layouts/DressStyle"
import CustomersReviews from "./layouts/CustomersReviews"

const page = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <NewArrival />
      <DressStyle />
      <CustomersReviews />
    </Box>
  )
}

export default page