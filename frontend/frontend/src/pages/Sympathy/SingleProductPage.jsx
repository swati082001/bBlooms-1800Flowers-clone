import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Text,
  Image,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Container,
  Box,
  Radio,
  RadioGroup,
  Checkbox,
  MenuItem,
  MenuList,
  Menu,
  MenuButton,
  Input,
  Center,
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  HStack,
  Link,useToast
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

  const SinglePlant = () => {
  let [prod, setprod] = useState([]);
  const [value, setValue] = React.useState("1");
  const toast = useToast()
  
  let params= useParams();
  console.log(params.id)

  let getdata = (id) => {
    console.log(id)
   
    axios
      .get(`https://weary-red-oyster.cyclic.app/products/plantbirth/get/${id}`)
      .then((res) => (
        setprod(res.data[0])
        // console.log(res.data)
      ))

      .catch((err) => console.log(err));
  };

 
    

    const handleAdd = async(prod)=>{
      console.log(prod)

      axios.post(`https://weary-red-oyster.cyclic.app/cart/add-to-cart`,{
        // "product_id":prod._id,
        // "price":prod.price
        "image":prod.image,
        "type":prod.type,
        "size":prod.size,
        "price":prod.price,
        "company":prod.company
       },{headers:{
        Authorization: localStorage.getItem("token")
       }})
      .then((res)=> console.log(res))
      .catch((err)=> console.log(err))

      toast({
        title: 'Item has been added to cart.',
        description: "Item has been successfully added to cart.",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position:"top"
      })

    }


  // [{data:[{}], error :""}]
 console.log(prod, "sudipa data  of single product")

  useEffect(() => {
    getdata(params.id);
  }, [params.id]);

  
  return (
    <Box >
      <Box p="10px" border="1px solid red">
            <Link>PRESIDENTS DAY SALE: SAVE UP TO 40% | SHOP NOW </Link>
        </Box>
      
      <Breadcrumb
        color="#65388B"
        spacing="3px"
        fontSize={14}
        ml={4}
        mt="90px"
        separator={<ChevronRightIcon />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Sympathy</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Sympathy & Memorial Plants</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">
            {prod.type}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Stack 
        direction={{ base: "column", md: "row" }}
        // border="10px solid teal"

        // gap={5}
      >
        {/* left side div  */}
        <Box
          w={{ base: "90%", md: "35%" }}
          // border="10px solid "
          mx={"auto"}
        >
          <Card
          // ml={20}
          >
            <CardBody>
              <Image
                src={prod.image}
                alt="plant"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                {/* <Heading size='md'>Living room Sofa</Heading> */}
                <Text fontSize={25} color={"#607767"} as="b" textAlign={"left"}>
                    Description
                  </Text>
                <Text style={{ textAlign: "left", fontSize: "16px" }}>
                  All the beauty of an outdoor garden, right inside. Our dish
                  garden brings together lush green foliage with a bright
                  blooming plant for a pop of color. Arriving in a charming,
                  window box-style wooden container with handles and stencil-cut
                  ‘BLOOM’ design, it’s a delightful any-day pick-me-up. Add your
                  choice of balloon or delicious chocolate chip cookies for a
                  cheerful surprise.
                </Text>
                {/* <Text color="blue.600" fontSize="2xl">$450</Text> */}
              </Stack>
            </CardBody>
            <Divider />
            {/* <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter> */}
          </Card>
        </Box>

        {/* right side div  */}
        <Box
          w={{ base: "90%", md: "65%" }}
          //  border="10px solid red"
          m={"auto"}
          paddingLeft={"35px"}
        >
          <h1 style={{ fontSize: "25px", textAlign: "left" }}>
            <Text as="b">{prod.type}</Text>
          </h1>
          <img
            style={{ height: "20px", marginTop: "10px" }}
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />

          <div
            style={{
              paddingLeft: "10px",
              marginTop: "15px",
              padding: "4px",
              height: "40px",
              textAlign: "left",
              backgroundColor: "#EAE8EC",
              borderRadius: "2px",
            }}
          >
            <Text as="b">1. Pick Your Item</Text>
          </div>

          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              height: "220px",
              padding: "20px",
            }}
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column">
                <Radio colorScheme={"purple"} size="lg" value="1">
                  <Text as="b">Small - 49.99</Text>
                </Radio>
                <Radio colorScheme={"purple"} size="lg" value="3">
                  <Text as="b">Medium - 69.99</Text>
                </Radio>
                <Radio colorScheme={"purple"} size="lg" value="4">
                  <Text as="b">Large - 99.99</Text>
                </Radio>
              </Stack>
            </RadioGroup>
            <hr />

            <div style={{ display: "flex", marginTop: "20px" }}>
              {/* <button style={{backgroundColor:"pink"}}>Klarna</button> */}
              <h3
                style={{
                  backgroundColor: "pink",
                  width: "80px",
                  height: "35px",
                  borderRadius: "4px",
                }}
              >
                <Text as="b">Klarna.</Text>
              </h3>
              <h3 style={{ marginLeft: "10px" }}>
                4 interest-free payments of $12.49.
              </h3>
              <u style={{ color: "#65388B" }}>
                <h3>Learn More</h3>
              </u>
            </div>
          </div>

          {/* //subscription div  */}

          <div
            style={{
              // border: "1px solid teal",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              padding: "20px",
              marginTop: "20px",
              // height: "80px",
              textAlign: "left",
              display: "flex",
            }}
          >
            <Checkbox colorScheme="green"></Checkbox>
            <img
              style={{ marginTop: "5px", width: "15%", marginLeft: "5px" }}
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt199dfd765a419907/61e09d4f14ef402247cebaac/PP_UpsellIcon.svg"
              alt=""
            />
            <p style={{ marginLeft: "20px", marginTop: "4px" }}>
              Free Shipping/No service Charge for One Full Year for Only
              $29.99/Year
            </p>
          </div>

          <div
            style={{
              // border: "1px solid black",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              // padding: "20px",
              // marginTop: "20px",
              height: "200px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                marginTop: "15px",
                padding: "4px",
                height: "40px",
                // border:"1px solid red",
                textAlign: "left",
                backgroundColor: "#EAE8EC",
                borderRadius: "2px",
              }}
            >
              <Text as="b">2. Enter Delivery Destination</Text>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  // border: "1px solid",
                  width: "400px",
                  marginLeft: "20px",
                }}
              >
                <Stack spacing={3}>
                  <Input variant="flushed" placeholder="Delivery Zip Code*" />
                </Stack>
              </div>

              <Box
                style={
                  {
                    // border: "10px solid"
                  }
                }
                p={5}
              >
                <Box>
                  <p style={{ color: "grey" }}>Location type</p>
                </Box>

                <Box pt={2}>
                  <Menu isLazy>
                    <MenuButton>
                      <HStack gap={10}>
                        <Text> Residence</Text>
                        <Box>
                          <TriangleDownIcon />{" "}
                        </Box>
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem>Residence</MenuItem>
                      <MenuItem>Business</MenuItem>
                      <MenuItem>Funeral home</MenuItem>
                      <MenuItem>Hospital</MenuItem>
                      <MenuItem>Apartment</MenuItem>
                      <MenuItem>School</MenuItem>
                      <MenuItem>Church</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Box>
            </div>

            <div>
              <Button onClick={ ()=> handleAdd(prod) }
                marginTop="20px"
                marginLeft="20px"
                // w="820px"
                // h="54px"
                w={"90%"}
                fontSize="20px"
                // border="1px solid blue"
                bg="#61C278"
                color={"white"}
                _hover={{
                  bg: "#00c876",
                  color: "white",

                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                Add to Cart <CalendarIcon ml={2} />
              </Button>
            </div>
          </div>

          <div
            style={{
              // border: "1px solid black",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              padding: "20px",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <Text as="b">SENT BY DELIVERY PARTNER</Text>
          </div>
        </Box>
      </Stack>
    </Box>
  );
};

export default SinglePlant;
