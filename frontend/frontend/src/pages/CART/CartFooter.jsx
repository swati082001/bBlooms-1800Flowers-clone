import { Box ,Text} from '@chakra-ui/react'
import React from 'react'

const CartFooter = () => {
  return (
    <div>
        <Box width={"100%"} bg="#65388b" h={"100px"} mt={{lg:"150px",md:"150px",sm:"",base:""}}>
            <Text color={"white"} pt="15px">© 2023 1-800-Flowers.com, Inc., Jericho, NY Family of BrandsTerms of Use-Privacy Notice-Accessibility Statement</Text>
        </Box>
    </div>
  )
}

export default CartFooter