import React,{useState,useMemo} from 'react'
import Styles from "./Checkout.module.css"
import Select from 'react-select'
import { Box,Flex,Card,Text,Image,Button, FormControl,Input ,FormErrorMessage,FormHelperText,InputGroup,InputRightAddon,Divider,CardFooter,ListItem,UnorderedList} from '@chakra-ui/react'

import { DeleteIcon,CheckIcon} from '@chakra-ui/icons'
import countryList from 'react-select-country-list'


const Checkout = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [location,setLocation] = useState('')
    const [address,setAddress] = useState('')
    const [zip,setZip] = useState(0)
    const [city,setCity] = useState('')
    const[state,setState] = useState('')
    const [country,setCountry] = useState('')
    

    const options = useMemo(() => countryList().getData(), [])
    const locationopt = [
        { value: 'Residence', label: 'Residence' },
        { value: 'Buisness', label: 'Buisness' },
        { value: 'Funeral Homes', label: 'Funeral Homes' },
        { value: 'Hospital', label: 'Hospital' },
        { value: 'School', label: 'School' },
        { value: 'church', label: 'church' },
        { value: 'apartment', label: 'apartment' }
        
      ]
      
      const changeHandler = country => {
          setCountry(country.label)
        }
        
        const changeLocation = location =>{
            setLocation(location.value)
        }
        
        // console.log(location);
        // console.log(country);
    const NoFname = fname=== "";
    const NoLname = lname=== "";
    const Noaddress = address === "";
    const NoZip = zip === 0;
   
    function handleSubmit(event){
        event.preventDefault();
        const obj={
            first:fname,
            last:lname,
            location:location,
            address:address,
            zip:zip,
            city,
            state,
            country
        }

        setFname("")
        setLname('')
        setAddress('')
        setCity('')
        setCountry('')
        setZip(0)
        setLocation('')

        console.log(obj);
    }


  return (
    <div className={Styles.Checkout}>
        <Box width="70%" margin={"auto"} border={"1px solid black"} h={"auto"}>
        <Flex justifyContent={"space-between"}>
            <Box width="60%" margin={"auto"}  h="auto" p={4} position="relative">
             
                <Text textStyle="Carthead">Delivery Information</Text>
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
                         <Text textStyle="CartBody" mr={"15px"}>Qty:  1</Text>   
                        
                      </Box>

                      <Box>
                         <DeleteIcon w={6} h={8} color="#65388b"/>
                      </Box>

                    </Flex>
                  </Box>
                  <br/>
                  <hr/>
                  <br/>

                  {/* Input part */}
                  <Text textStyle="Cardtop" mb={"20px"}>Sending To:</Text>
                  
                  <form onSubmit={handleSubmit}>
                        
                    <Flex>
                    <FormControl isRequired isInvalid={NoFname}>
                       <Input type="text"  placeholder='First name' value={fname} onChange={(e)=>setFname(e.target.value)} />
                       {!NoFname ? (
                           <FormHelperText>Enter the FirstName you'd like to receive the order on.
                            </FormHelperText>) : (
                                <FormErrorMessage>First Name is required.</FormErrorMessage>)}
                    </FormControl>

                    <FormControl isRequired isInvalid={NoLname}>
                       <Input  type="text" placeholder='Last name' value={lname} onChange={(e)=>setLname(e.target.value)} />
                       {!NoLname ? (
                           <FormHelperText>Enter the LastName you'd like to receive the order on.
                            </FormHelperText>) : (
                                <FormErrorMessage>Last Name is required.</FormErrorMessage>)}
                    </FormControl>
                    </Flex>

                    <FormControl isRequired mt={"10px"}>
                    <Select placeholder={location} options={locationopt} value={location} onChange={changeLocation}> </Select>
                    </FormControl>

                    <FormControl isRequired isInvalid={Noaddress} mt={"10px"}>
                       <Input type="text"  placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} />
                       {!Noaddress ? (
                           <FormHelperText>Enter the Address you'd like to receive the order on.
                            </FormHelperText>) : (
                                <FormErrorMessage>Address is required.</FormErrorMessage>)}
                    </FormControl>

                    <Flex justifyContent={"space-around"}>
                    {/* ZipCode */}
                    <FormControl isRequired isInvalid={NoZip} mt={"10px"}>
                       <Input type="number" placeholder='ZipCode' value={zip} onChange={(e)=>setZip(e.target.value)} />
                       {Noaddress ? (
                                <FormErrorMessage>Zip Code is required.</FormErrorMessage>) : null}
                    </FormControl>

                    <FormControl isRequired  mt={"10px"}>
                       <Input type="text"  placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired  mt={"10px"}>
                       <Input type="text"  placeholder='State' value={state} onChange={(e)=>setState(e.target.value)} />
                    </FormControl>
 
                    </Flex>

                    <FormControl mt={"10px"}>
                    <Select placeholder={country} options={options} value={country} onChange={changeHandler} />
                    </FormControl>


                    <FormControl mt={"10px"}>
                    <Input type={"submit"} bg="#00c876" color={"white"} _hover={{bg:"#00c876" ,color:"white",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} value="SAVE ADDRESS AND CONTINUE"  />
                    </FormControl>

                  </form>
                  <br/>
                  <hr/>
                  <br/>
                  <Text textStyle="Cardtop" mb={"20px"}>Delivery Date:</Text>
                </Card>

             
            </Box>
             {/* second part */}
          <Box width="40%" margin={"auto"} border={"1px solid black"}  h={"auto"} position={"sticky"} p={4}>
          
              <Card mt={"20px"} p={4} border="2px solid #65388b">
                <Text mb={"20px"} textStyle="Cardtop">Order Summary</Text>
                
                <Text mb={"20px"} textStyle="Cardtop">PRICE DETAILS</Text>

                <Box w="100%" mt={1}>
                    <Flex justifyContent="space-between">
                        <Text textStyle="Cardtop" >Price ()</Text>
                        <Text textStyle="CartBody">₹</Text>
                    </Flex>
                </Box>

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

         
        </Box>
    </div>
  )
}

export default Checkout