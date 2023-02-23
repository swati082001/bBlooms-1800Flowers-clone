import { Box, Heading, Text, Image, Flex, Input, Button, Link } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { FcApproval } from "react-icons/fc";
// import { GiSchoolBag, GiSuitcase } from "react-icons/gi";

export const Login = () => {

    return <Box h="100vh" zIndex="0" display="flex" alignItems="center" justifyContent="space-around" border=" 1px solid black" background="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/bg40.jpg')">

        <Box w="30%" h='90%' zIndex="1" bg="white" opacity="0.8" borderRadius="10px"  border=" 1px solid black" align="center"   >
            <Image w="50%"  display="block" margin="auto" mt="20px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=60&auto=webp&optimize={medium}" alt="1800 flowers" />

            <Text fontWeight="bold" color="gray" fontSize="lg" noOfLines={2} w="300px" mt="170px" >Create an account for faster checkout and order tracking</Text>

            <Text fontWeight="bold" color="gray" fontSize="lg" noOfLines={2} w="300px" mt="170px" >One Account,12 Brands</Text>
            <Heading>CELEBRATIONS</Heading>
            <Heading>FAMILY OF BRANDS</Heading>
        </Box>

        <Box w="30%" h='90%' lineHeight="10px"   zIndex="1" borderRadius="10px"  border=" 5px solid white" >
            {/* <Box  > */}


            <Box mt=" 50px" >

                <Heading color="white" > Login</Heading>

                <FormControl w="65%" m="auto" mt="20px" mb="50px" >
                   

                    <FormLabel mt="20px" color="white" fontWeight="bold" >Email Id</FormLabel>
                    <Input bg="white" type='email' placeholder="Tell us your Email Id" id={"field-:r4"} name="email" />


                    <FormLabel color="white" mt="20px" fontWeight="bold" >Password</FormLabel>
                    <Input bg="white" type='password' placeholder="Create a password for your account" id={"field-:r5"} name="password" />
                    <FormHelperText color="white" > <Text fontWeight="bold" align="left">Minimum 6 characters required</Text> </FormHelperText>

                   

                    <Input mt="20px" type="submit" w="300px" bg="purple.500" value="Register" />
                    <Text bg="white" fontSize="xs" mt="20px" align="left" mb="20px" fontWeight="bold" > By contiuing, you agree to the <Link color="blue.400">Terms and Conditions</Link> & <Link color="blue.400">Privacy Policy</Link> of 1800flowers.com </Text>

                    {/* <Button w="250px" bg="purple.500" align="left">Register</Button> */}


                </FormControl>

                <Box display="flex" justifyContent="center" alignItems="center" >
                    <Box borderTop="2px solid white" w="100px"  mr="10px" ></Box>
                    <Text color="white" fontWeight="bold" >Or Sign In with</Text>
                    <Box borderTop="2px solid white" w="100px" ml="10px" ></Box>
                </Box>

                <Box display="flex" mt="50px" justifyContent="center" >

                    <Link>
                        <Box bg="purple.500" h="50px" w="200px" border="1px solid black" display="flex" alignItems="center" >
                            <Image ml="10px" w="10%" src="https://barod.cymru/wp-content/uploads/2020/07/facebook-icon-transparent-background-3.png" alt="facebook" />
                            <Text>Sign in with facebook</Text>
                        </Box>
                    </Link>

                    <Link>

                        <Box bg="white" w="200px" h="50px" border="1px solid black" display="flex" alignItems="center" >
                            <Image ml="10px" w="10%" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="facebook" />
                            <Text  >Sign in with Google</Text>
                        </Box>
                    </Link>
                </Box>

            </Box>

            {/* </Box> */}
        </Box>
    </Box>
}