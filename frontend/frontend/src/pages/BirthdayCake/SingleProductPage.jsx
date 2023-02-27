import {
  ArrowRightIcon,
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
  CardFooter,
  Divider,
  Heading,
  Stack,
  Container,
  Box,
  Checkbox,
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  HStack,
  Link,useToast
} from "@chakra-ui/react";
import axios from "axios";

import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";


const SingleCake = () => {
  let [prod, setprod] = useState([]);
  const [value, setValue] = React.useState("1");
  const toast = useToast()
  
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
    <>
    <div >
    <Box  p="10px" border="1px solid red">
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

      <Stack direction={{ base: "column", md: "row" }} >
        {/* left side div  */}
        <Box w={{ base: "90%", md: "50%" }}  mx={"auto"}  >
          <Card >
            <CardBody justifyContent={"center"} display={"flex"} >
              <Image  w={"80%"} 
                src={prod.image}
                alt="cake"
                borderRadius="lg"
              />
             
  
            </CardBody>
            <Divider />
           
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
    </>
  );
};

export default SingleCake;
