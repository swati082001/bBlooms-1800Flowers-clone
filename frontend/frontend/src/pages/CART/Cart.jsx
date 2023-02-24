import React from 'react'
import {Box, Button, Card, CardFooter, Flex, Image, InputGroup, Select, Text, Input,InputRightAddon,Divider, UnorderedList, ListItem} from "@chakra-ui/react"
import Styles from "./cart.module.css"
import { DeleteIcon,CheckIcon} from '@chakra-ui/icons'
import CartFooter from './CartFooter'
import { Navbar } from '../../Components/Navbar'

const Cart = () => {
  return (
    <div className={Styles.cart}>
      {/* <Navbar/> */}
        <Box width={{base:"100%",sm:"100%",md:"100%",lg:"75%"}} margin={{base:"auto",sm:"auto",md:"auto",lg:"auto"}}  h={"auto"}>
            <Flex direction={{base:"column",sm:"column",md:"row",lg:"row"}} justifyContent={{base:"space-around",sm:"space-around",md:"space-around",lg:"space-between"}}>
            <Box width={{base:"100%",sm:"100%",md:"70%",lg:"60%"}} margin={"auto"}  h={{base:"auto",sm:"auto",md:"900px",lg:"900px"}} p={{base:4,sm:4,md:4,lg:4}}>
             
                <Text textStyle="Carthead">Shopping Cart</Text>
                <Card bg={"white"} mt="20px" p={4} border="2px solid #65388b">
                  <Text textStyle="Cardtop">Item 1 out of 1:</Text>
                  <hr/>
                  
                  
                  <Box mt={"25px"}>
                    <Flex justifyContent={"space-between"}>
                      <Image w={"20%"} src='https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/161834s050218c.jpg?quality=60'></Image>

                      <Box textAlign={"initial"}>
                         <Text textStyle="Cardtop">Peace Lily Plant for Sympathy</Text>
                         <Text textStyle="CartBody">Item# : </Text>
                         <Text textStyle="CartBody">Sold By : </Text>
                         <Text textStyle="CartBody">Price : </Text>
                         <Flex >
                         <Text textStyle="CartBody" mr={"15px"}>Qty:  </Text>
                          <Select variant='filled' width={"100px"} >
                          <option value='1'> 1</option>
                          <option value='2'> 2</option>
                          <option value='3'> 3</option>
                          <option value='4'>4 </option>
                          <option value='5'> 5</option>
                          <option value='6'>6 </option>
                          <option value='7'>7 </option>
                          <option value='8'>8 </option>
                          <option value='9'>9 </option>
                          <option value='10'>10 </option>
                          </Select>
                         </Flex>
                      </Box>

                      <Box>
                         <DeleteIcon w={6} h={8} color="#65388b"/>
                      </Box>

                    </Flex>
                  </Box>
                </Card>

                <Card bg={"white"} mt="20px" p={4} border="2px solid #65388b">
                  
                  <Text mb={"20px"} textStyle="Cardtop">Cart Items: 1</Text>
                  <Button bg="#00c876" color={"white"} _hover={{bg:"#00c876" ,color:"white",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>PROCEED TO CHECKOUT</Button>

                  
                </Card>
             
            </Box>

            {/* 2ndpart */}
            <Box width={{base:"100%",sm:"100%",md:"35%",lg:"43%"}} margin={"auto"}  h={{base:"auto",sm:"auto",md:"900px",lg:"900px"}} p={{base:4,sm:4,md:4,lg:4}}>
              <Card>
              <Button bg="#00c876" color={"white"} _hover={{bg:"#00c876" ,color:"white",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>PROCEED TO CHECKOUT</Button>
              </Card>

              <Card mt={"20px"} p={4} border="2px solid #65388b">
                <Text mb={"20px"} textStyle="Cardtop">Order Summary</Text>
                <InputGroup>
                  <Input placeholder="Add Coupon Code"/>
                  <InputRightAddon textStyle="SinglePageHead" color="#00c876">APPLY</InputRightAddon>
                </InputGroup>
                <br/>
                  <Divider />
                <br/>
                <Text mb={"20px"} textStyle="Cardtop">PRICE DETAILS</Text>

                <Box w="100%" mt={1}>
                    <Flex justifyContent="space-between">
                        <Text textStyle="Cardtop" >Price ()</Text>
                        <Text textStyle="CartBody">₹</Text>
                    </Flex>
                </Box>

                <Box w="100%" mt={2}>
                    <Flex justifyContent="space-between">
                        <Text textStyle="Cardtop" >Delivery Charges</Text>
                        <Text textStyle="CartBody" color="green">FREE</Text>
                    </Flex>
                </Box>

                <br/>
                <Divider/>
                  <Box w="100%" mt={2}>
                    <Flex justifyContent="space-between">
                      <Text textStyle="Cardtop">AMOUNT</Text>
                      <Text textStyle="CartBody" color="green">xyz</Text>
                      </Flex>
                  </Box>
                  <br/>
                  <Divider/>
                <CardFooter bg={"#e3f1ec "}>
                  <Flex direction={'column'}>

                  <Text textStyle="CartBody">
                    FREE SHIPPING/ No Service Charge for year across our brands. Just ₹399.00/year
                  </Text>
                  <br></br>
                  <Image width={"50%"} src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc723326dc66beda5/image-20220307-142252.png' alt=''></Image>

                  <UnorderedList listStyleType={"none"} mt="20px">
                     <ListItem>
                      <Flex >
                     <CheckIcon w={5} h={6} color="#00c876" mr={4}></CheckIcon>
                     <Text textStyle="CartBody">Free Shipping</Text>
                      </Flex>
                     </ListItem>

                     <ListItem>
                      <Flex >
                     <CheckIcon w={5} h={6} color="#00c876" mr={4}></CheckIcon>
                     <Text textStyle="CartBody">No Service Charge When You Order 2-Business Days in Advance</Text>
                      </Flex>
                     </ListItem>

                     <ListItem>
                      <Flex >
                     <CheckIcon w={5} h={6} color="#00c876" mr={4}></CheckIcon>
                     <Text textStyle="CartBody">Reduce & Expedited Shipping/Service Fees Options</Text>
                      </Flex>
                     </ListItem>

                     <ListItem>
                      <Flex >
                     <CheckIcon w={5} h={6} color="#00c876" mr={4}></CheckIcon>
                     <Text textStyle="CartBody">Earn Points to Unlock Rewards and Perks</Text>
                      </Flex>
                     </ListItem>

                     <ListItem>
                      <Flex >
                     <CheckIcon w={5} h={6} color="#00c876" mr={4}></CheckIcon>
                     <Text textStyle="CartBody">No Minimums or Promo Codes Needed</Text>
                      </Flex>
                     </ListItem>

                     <ListItem>
                      <Flex >
                     <CheckIcon w={5} h={6} color="#00c876" mr={4}></CheckIcon>
                     <Text textStyle="CartBody">Automatically Renews, Cancel Anytime</Text>
                      </Flex>
                     </ListItem>
                  </UnorderedList>
                  </Flex>
                  
                </CardFooter>
              </Card>

              
            </Box>
            </Flex>
            
            {/* footer */}
        </Box>
            <CartFooter/>
    </div>
  )
}

export default Cart