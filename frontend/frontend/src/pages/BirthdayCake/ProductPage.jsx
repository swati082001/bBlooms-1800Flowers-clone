

import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Img,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { Heading, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const BirthdayCake = () => {
  let [prod, setprod] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setcount] = useState(0);
  const [query, setQuery] = useState("");

  let getdata = () => {
    axios
      .get("https://weary-red-oyster.cyclic.app/products/birthdaycake")
      .then((res) => {
        setprod(res.data);
        console.log(res);
      })

      .catch((err) => console.log(err));
  };



  let handleHigh = () => {
    setcount(count + 1);
    let highdata = prod.sort((a, b) => {
      return +b.price - +a.price;
    });

    setprod(highdata);
  };

  let handleLow = () => {
    setcount(count + 1);
    let lowdata = prod.sort((a, b) => {
      return +a.price - +b.price;
    });

    setprod(lowdata);
  };

  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setQuery(query);
    const filteredData = prod.filter((item) =>
      item.type.toLowerCase().includes(query)
    );
    setprod(filteredData);
  };



  useEffect(() => {
    getdata();
  }, []);

  console.log(prod);

  return (
    <>
    <Box p="10px" border="1px solid red">
            <Link>PRESIDENTS DAY SALE: SAVE UP TO 40% | SHOP NOW </Link>
        </Box>
      <div
        style={{
          gap: "15px",
          display: "flex",
          marginTop: "80px",
        //   border: "1px solid black",
        }}
      >
        <div style={{ marginLeft: "10px" }}>
          <Text
            style={{
            //   border: "1px solid red",
              fontSize: "26px",
              color: "#65388B",
              marginTop: "10px",
              width: "450px",
            }}
            textStyle="Carthead"
          >
            Send A Cake: Birthday Cake Delivery
          </Text>
        </div>
        {/* <p style={{fontSize:"50px"}}>|</p> */}
        <div style={{ borderLeft: "1px solid #757575" }}>
          <p
            style={{
              textAlign: "left",
              fontSize: "14px",
              height: "70px",
              width: "850px",
              paddingLeft: "30px",
            }}
          >
            Looking for a delicious way to wish them a happy birthday? Celebrate
            with a birthday cake delivery! Our cake delivery collection is full
            of cakes in every flavor, cake pops, cupcakes & more, we’ve got
            birthday treats for girls & boys of every age. We also offer same
            day cake delivery!
          </p>

          <div
            style={
              {
                // border:"7px solid black"
                display:"flex",
                justifyContent:"space-around"
              }
            }
          >
            <Button mr={"10px"} border={"1px solid grey"} onClick={handleHigh}>
              {" "}
              High to Low
            </Button>
            <Button ml={"10px"} border={"1px solid grey"} onClick={handleLow}>
              {" "}
              Low to High
            </Button>
            <Input w={"30%"} border={"1px solid grey"}
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search......"
            />
          </div>
            


        </div>
      </div>

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
        <ArrowRightIcon boxSize={2} /> Birthday flowers
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

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Birthday Cake delivery</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div style={{ display: "flex", gap: "25px" }}>
        <div
          style={{
            // border: "1px solid teal",
            width: "280px",
          }}
        >
          <div
            style={{
              marginLeft: "10px",
              //   border: "1px solid red",
              height: "280px",
              width: "270px",
              backgroundColor: "#734f96",
              marginTop: "10px",
              borderRadius: "8px",
              marginLeft: "10px",
            }}
          >
            <h3 style={{ color: "white", paddingTop: "15px", }}>
              <Text as="b">FIND AVAILABLE PRODUCTS!</Text>
            </h3>
            <p
              style={{
                marginLeft: "12px",
                fontSize: "11px",
                color: "white",
                padding: "15px",
                textAlign: "left",
              }}
            >
              ENTER DELIVERY ZIP CODE OR ADDRESS*
            </p>
            <input
              style={{
                height: "45px",
                width: "215px",
                borderRadius: "4px",
                // margin: "-15px",

                marginTop: "-10px",
              }}
              type="text"
              placeholder="Enter a location"
            />
            <p
              style={{
                marginLeft: "8px",
                fontSize: "11px",
                color: "white",
                padding: "15px",
                textAlign: "left",
              }}
            >
              LOCATION TYPE:
            </p>
            <Menu>
              <MenuButton
                style={{
                  height: "45px",
                  width: "220px",
                  textAlign: "left",
                  marginTop: "-10px",
                }}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Residence
              </MenuButton>
              <MenuList>
                <MenuItem>Residence</MenuItem>
                <MenuItem>Business</MenuItem>
                <MenuItem>Funeral home</MenuItem>
                <MenuItem>Hospital</MenuItem>
                <MenuItem>Apartment</MenuItem>
                <MenuItem>School</MenuItem>
                <MenuItem>Church</MenuItem>
              </MenuList>
            </Menu>
            <WrapItem>
              <Button
                style={{
                  height: "45px",
                  width: "221px",
                  marginLeft: "25px",
                  marginTop: "10px",
                }}
                colorScheme="whatsapp"
              >
                GO
              </Button>
            </WrapItem>
          </div>
          <div
            style={{
              textAlign: "left",
              paddingTop: "20px",
              border: "1px solid #636363",
              marginLeft: "12px",
              height: "360px",
              width: "270px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            <div style={{ marginLeft: "15px" }}>
              <Text as="b">BIRTHDAY FLOWERS AND GIFTS</Text>

              <u>
                <p>Birthday Flowers</p>
              </u>
              <u>
                <p>Same day Birthday delivery</p>
              </u>
              <u>
                <p>Same Day Birthday Delivery</p>
              </u>
              <u>
                <p>Same Day Cake Delivery</p>
              </u>
              <u>
                <p>Birthday Gift Baskets</p>
              </u>
              <u>
                <p>Birthday Plants</p>
              </u>
              <u>
                <p>Birthday Roses</p>
              </u>
              <u>
                <p>Best Selling Birthday Gifts</p>
              </u>
              <u>
                <p>Feliz Cumpleanos Flores</p>
              </u>
              <u>
                <p>Flower Birthday Cakes</p>
              </u>
              <u>
                <p>Unique Birthday Gifts</p>
              </u>
              <u>
                <p>Birthday Gift Guide</p>
              </u>
            </div>
          </div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "280px",
              width: "270px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                marginLeft: "15px",
                textAlign: "left",
                marginTop: "15px",
              }}
            >
              <Text as="b">RELATED BIRTHDAY ARTICLES</Text>
              <u>
                <p>Celebration Ideas for Every</p>
              </u>
              <u>
                <p>Milestone Birthday.</p>
              </u>
              <u>
                <p>7 Ways to Make a Virtual Birthday </p>
              </u>
              <u>
                <p>Celebration Special</p>
              </u>
              <u>
                <p>Why We Eat Cake and Blow Out</p>
              </u>
              <u>
                <p>Candles</p>
              </u>
              <u>
                <p>The Zodiac Sign Gift Guide</p>
              </u>
              <u>
                <p>How to Say “Happy Birthday” in 50</p>
              </u>
              <u>
                <p>Different Languages</p>
              </u>
            </div>
          </div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "120px",
              width: "270px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                marginLeft: "15px",
                textAlign: "left",
                marginTop: "15px",
              }}
            >
              <Text as="b">RELATED SEARCHES</Text>
              <u>
                <p>Flower Delivery same day</p>
              </u>
              <u>
                <p>Flower Subcriptions</p>
              </u>
            </div>
          </div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "640px",
              width: "270px",
              marginTop: "20px",
            }}
          >
            <img
              style={{ width: "100%" }}
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbd8e878899d3f1bd/5d52d450696dde105b7d59dd/smile_guarantee.jpg"
              alt="pic"
            />
          </div>
        </div>

        {/* <div> */}
        {/* <div
            style={{
             border: "1px solid red",
              height: "8000px",
              width: "1030px",
              backgroundColor: "#FFFFFF",
            }}
          >
            
          </div> */}

        {/* </div> */}
        <Box>
          <SimpleGrid
            // border={"2px solid"}
            gap={5}
            columns={{ base: 1, md: 2, lg: 3 }}
          >
            {prod.map((el) => (
              <Stack
                //   border="2px solid"
                h={450}
                
              >
                <Link to={`/birthdaycake/${el._id}`}>
                  <Image src={el.image} h="360px" />
                </Link>

                <Img 
                  style={{marginLeft:"-100px",height: "14px" }}
                  src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=75&auto=webp&optimize={medium}"
                  alt="passport_pic"
                />
                <h2 style={{ textAlign: "left", fontSize: "18px" }}>
                  {el.type}
                </h2>
                <h2 style={{ textAlign: "left" }}>
                  <Text as="b">{el.price}</Text>
                </h2>

                {/* <Image src={el.image} h="320px"/> */}
                {/* <Heading h={50}>{el.title}</Heading> */}
                {/* <Image
                  cursor="pointer"
                  href="/singleproductpage"
                  src="https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/4106821x.jpg?width=545&height=597&quality=80&auto=webp&auto=webp&optimize={medium}"
                  alt="photo1"
                /> */}
                {/* <Image  h="16px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=75&auto=webp&optimize={medium}" alt="pass"/> */}
                {/* <Text>{el.price}</Text> */}
                {/* <Text>{el.description}</Text> */}
                {/* <img
                  style={{ marginLeft: "-99px", height: "14px" }}
                  src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=75&auto=webp&optimize={medium}"
                  alt=""
                /> */}
                {/* <h2 style={{ textAlign: "left", fontSize: "18px" }}>
                  Floral Embrace™
                </h2> */}
                {/* <h2 style={{Text:"b"}}>$49.99 - $79.99</h2> */}
                
              </Stack>
            ))}
          </SimpleGrid>
        </Box>
      </div>
    </>
  );
};

export default BirthdayCake;
