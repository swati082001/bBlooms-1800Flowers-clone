import { Box, Input, Button, Image, Text } from "@chakra-ui/react";

export const Navbar = () => {

    return <Box border="1px solid black" h="auto" >

        <Box  border="1px solid black" h="50%" display="flex" justifyContent="space-around" alignItems="center" >

            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=60&auto=webp&optimize={medium}" alt="website_logo" />

            <Box display="flex" w='auto'>
                <Input w="500px" type="text" placeholder="Enter Keyword or Product Number" />
                <Button bg="purple.500" >Search</Button>
            </Box>

            <Button>Sign In</Button>
            <Button>My Order</Button>
            <Box display="flex" gap="5px" >

                <Button>Cart</Button> <Text mt="5px" >{0}</Text>
            </Box>
        </Box>

        <Box border="1px solid black" p="10px" display="flex" justifyContent="space-around"  >
             <Text>BirthDay </Text>
             <Text>Sympathy</Text>
             <Text>Occasions</Text>
             <Text>Flowers</Text>
             <Text>Plants</Text>
             <Text>Gift Basket & Foods</Text>
             <Text>Gifts & More</Text>
             <Text>Same Day Delivery</Text>
             <Text>Sale</Text>
             <Text>Community</Text>
             
        </Box>
    </Box>
}