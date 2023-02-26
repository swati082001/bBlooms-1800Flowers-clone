import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Text,
  Image,
  Card,
  CardBody,
  Divider,
  Stack,
  Radio,
  RadioGroup,
  Checkbox,
  MenuItem,
  MenuList,
  Menu,
  MenuButton,
  Input,
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";

import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";


const SingleCake = () => {
  let [prod, setprod] = useState([]);
  const [value, setValue] = React.useState("1");
  
  let params= useParams();
  console.log(params.id)

  let getdata = (id) => {
    console.log(id)
   
    axios
      .get(`https://weary-red-oyster.cyclic.app/products/birthdaycake/get/${id}`)
      .then((res) => (
        setprod(res.data)
        // console.log(res.data)
      ))

      .catch((err) => console.log(err));
  };
    console.log(prod,"prakash")
 
    // fetch("https://weary-red-oyster.cyclic.app/cart/add-to-cart, {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-type": "application/json",
    //     // Authorization: "",
    //     // localStorage.getItem("currentUser")
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res) )
    //   .catch((err) => console.log(err));
    //  }


    const handleAdd = async(prod)=>{
      console.log(prod)

     

      // let res =await axios({
      //   method :"post",
      //   url:"https://weary-red-oyster.cyclic.app/cart/add-to-cart",
      //   data:payload,
      //   // headers:{
      //   //   Authorization:token
      //   // }
      // })

  // console.log(payload);
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

    }


  // [{data:[{}], error :""}]
 console.log(prod, "sudipa data  of single product")

  useEffect(() => {
    getdata(params.id);
  }, [params.id]);

  
  
  
  
  return (
    <div>
      {/* <p
        style={{
          marginLeft: "10px",
          textAlign: "left",
          fontSize: "14px",
          color: "#65388B",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Home <ArrowRightIcon boxSize={2} /> Birthday{" "}
        <ArrowRightIcon boxSize={2} /> Birthday flower{" "}
        <ArrowRightIcon boxSize={2} /> Floral Embrace™
      </p> */}

      <Breadcrumb
        color="#65388B"
        spacing="3px"
        fontSize={14}
        ml={4}
        separator={<ChevronRightIcon />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Birthday</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Birthday Cake Delivery</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">
            {prod.type}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Stack
        direction={{ base: "column", md: "row" }}
        //  border="10px solid teal"
        // gap={2}
      >
        {/* left side div  */}
        <Box w={{ base: "90%", md: "50%" }} 
        //  border="10px solid " 
        mx={"auto"}>
          <Card
          // ml={20}
          >
            <CardBody  justifyContent={"center"} display={"flex"}>
              <Image  w={"80%"} 
                src={prod.image}
                alt="cake"
                borderRadius="lg"
              />
              {/* <Stack mt="6" spacing="3">
                {/* <Heading size='md'>Living room Sofa</Heading> */}

                {/* <Text style={{ textAlign: "left" }}>
                  <Text fontSize={25} color={"#607767"} as="b">
                    Contents
                  </Text>
                  <h3>
                    Dimensions: Approx 7 inches. Net Weight: Approx 2 lbs.
                    Serves 6 to 8. Certified OK Kosher. Bake Me A Wish! uses
                    only the finest ingredients with — yes — creamy frostings,
                    premium chocolate, cane sugars, sweet butter and all the
                    other great things that make their gourmet gifts delicious
                    and indulgent
                  </h3>

                  <Text fontSize={25} color={"#607767"} as="b">
                    Description
                  </Text>
                  <h3> */}
                    {/* This is the perfect cake for the true chocolate lover. Our
                    dense, moist brownie cake is covered in not one, but three
                    layers of decadent chocolate. The cake is coated with a rich
                    chocolate fondant icing, showered with dark chocolate
                    shavings and then finally drizzled with milk and dark
                    chocolate glazes. This triple-chocolate delight is sure to
                    satisfy any sweet tooth. Each cake is delivered in an
                    elegant gift box with a personalized greeting card to
                    celebrate any occasion. Certified Kosher
                  </h3>
                </Text>
                {/* <Text color="blue.600" fontSize="2xl">$450</Text> */}
              {/* </Stack> */} 
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
        <Box w={{ base: "90%", md: "50%" }} 
        // border="10px solid red"
         m={"auto"}  textAlign={"left"}
         paddingLeft={"20px"} >
          <h1  style={{ fontSize: "30px", textAlign: "left",
          // border:"2px solid blue" ,
          width:"65%"}}>
            <Text  as="b">{prod.type}</Text>
          </h1>
          <h3>149976</h3>
          <h3 style={{textAlign:"center",marginTop:"-22px"}}>Available To Ship Now</h3>
          <Text fontSize={25} as="b">{prod.price}</Text>
          {/* <img
            style={{ height: "20px", marginTop: "10px" }}
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=85&auto=webp&optimize={medium}"
            alt=""
          /> */}

          {/* <div
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
          </div> */}

          {/* <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              height: "220px",
              padding: "20px",
            }}
          > */}
            {/* <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column">
                <Radio colorScheme={"purple"} size="lg" value="1">
                  <Text as="b">Extra Large</Text>
                </Radio>
                <Radio colorScheme={"purple"} size="lg" value="2">
                  <Text as="b">Large</Text>
                </Radio>
                <Radio colorScheme={"purple"} size="lg" value="3">
                  <Text as="b">Midium</Text>
                </Radio>
                <Radio colorScheme={"purple"} size="lg" value="4">
                  <Text as="b">Small</Text>
                </Radio>
              </Stack>
            </RadioGroup> */}

            {/* <div style={{ display: "flex", marginTop: "20px" }}> */}
              {/* <button style={{backgroundColor:"pink"}}>Klarna</button> */}
              {/* <h3
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
          </div> */}

          {/* //subscription div  */}
          {/* <Stack
            direction={{ base: "column", lg: "row" }}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              padding: "20px",
              marginTop: "20px",
              height: "150px",
              textAlign: "left",
              display: "flex",
              border: "5px solid green", */}
             {/* gap: "100px", */}
            {/* }}
          > */}
            {/* //left  */}
            {/* <Box>
              <Checkbox colorScheme="green">
                <Text as="b">Start a subscription & save 15% Off</Text>
              </Checkbox>
            </Box> */}
            {/* <Divider orientation='vertical' /> */}

            {/* <Box>
              <div
                style={{
                  // borderLeft: "1px solid grey",
                  // width: "350px",
                  // border:"3px solid blue",
                  display: "flex",
                  // gap: "20px",
                  // padding: "15px",
                  // height: "50px",
                }}
              >
                <Text as="b">Frequency:</Text>
                <Box ml={5}>
                  <Menu w={"100%"}>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Every 4 Weeks
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu>
                </Box> */}
              {/* </div>
              <div>
                <div>
                  <div
                    style={{ */}
                      {/* // border: "1px solid grey",
                      // width: "350px",
                      display: "flex",
                      //  gap: "20px",
                      //  padding: "15px",
                    }}
                  > */}
                    {/* <Text as="b">Duration:</Text>
                    <Box ml={5}>
                      <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                          continue until I stop
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Download</MenuItem>
                          <MenuItem>Create a Copy</MenuItem>
                          <MenuItem>Mark as Draft</MenuItem>
                          <MenuItem>Delete</MenuItem>
                          <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                      </Menu>
                    </Box>
                  </div>
                </div>
              </div>
            </Box>
          </Stack> */}

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
              {/* <div
                style={{
                   border: "1px solid",
                  width: "400px",
                  marginLeft: "20px",
                }}
              > */}
                {/* <Stack spacing={3}>
                  <Input variant="flushed" placeholder="Delivery Zip Code*" />
                </Stack> */}
              {/* </div> */}

              {/* <Box
                style={
                  {
                   border: "10px solid"
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
                    <MenuList> */}
                      {/* MenuItems are not rendered unless Menu is open */}
                      {/* <MenuItem>Residence</MenuItem>
                      <MenuItem>Business</MenuItem>
                      <MenuItem>Funeral home</MenuItem>
                      <MenuItem>Hospital</MenuItem>
                      <MenuItem>Apartment</MenuItem>
                      <MenuItem>School</MenuItem>
                      <MenuItem>Church</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Box> */}
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
            <div style={{ marginLeft:"80px", display: "flex", marginTop: "20px" }}> 

            <h3
                style={{
                  backgroundColor: "pink",
                  width: "80px",
                  height: "35px",
                  borderRadius: "4px", padding:"5px"
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

          {/* <div
            style={{
              // border: "1px solid black",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              padding: "20px",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <Text as="b">DESIGNED & DELIVERED BY LOCAL SHOP</Text>
          </div> */}

  {/* Cake Description */}
            <Stack mt="6" spacing="3">
                {/* <Heading size='md'>Living room Sofa</Heading> */}

                <Text style={{ textAlign: "left" }}>
                  <Text fontSize={25} color={"#607767"} as="b">
                    Contents
                  </Text>
                  <h3>
                    Dimensions: Approx 7 inches. Net Weight: Approx 2 lbs.
                    Serves 6 to 8. Certified OK Kosher. Bake Me A Wish! uses
                    only the finest ingredients with — yes — creamy frostings,
                    premium chocolate, cane sugars, sweet butter and all the
                    other great things that make their gourmet gifts delicious
                    and indulgent
                  </h3>
                  <hr />

                  <Text fontSize={25} color={"#607767"} as="b">
                    Description
                  </Text>
                  <h3>
                    This is the perfect cake for the true chocolate lover. Our
                    dense, moist brownie cake is covered in not one, but three
                    layers of decadent chocolate. The cake is coated with a rich
                    chocolate fondant icing, showered with dark chocolate
                    shavings and then finally drizzled with milk and dark
                    chocolate glazes. This triple-chocolate delight is sure to
                    satisfy any sweet tooth. Each cake is delivered in an
                    elegant gift box with a personalized greeting card to
                    celebrate any occasion. Certified Kosher
                  </h3>
                <hr />
                </Text>
                {/* <Text color="blue.600" fontSize="2xl">$450</Text> */}
              </Stack>





        </Box>
      </Stack>
    </div>
  );
};

export default SingleCake;
