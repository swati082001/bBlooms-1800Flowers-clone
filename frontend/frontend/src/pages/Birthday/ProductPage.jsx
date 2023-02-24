import React from "react";
import {Box,Button,Menu,MenuButton,MenuItem,MenuList,Text,WrapItem,} from "@chakra-ui/react";
import {  Image, SimpleGrid, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { ArrowRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";

const Birthday = () => {
  let [prod, setprod] = useState([]);

  let getdata = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setprod(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdata();
  }, []);

  console.log(prod);

  return (
    <>
     <Navbar/>
      <div
        style={{
          gap: "30px",
          display: "flex",
          marginTop: "30px",
          //   border: "1px solid black",
        }}
      >
        <div style={{ marginLeft: "10px" }}>
          <Text
            style={{ fontSize: "26px", color: "#65388B", marginTop: "10px" }}
            textStyle="Carthead"
          >
            Birthday Flowers
          </Text>
        </div>
        {/* <p style={{fontSize:"50px"}}>|</p> */}
        <div style={{ borderLeft: "1px solid #757575" }}>
          <p
            style={{
              textAlign: "left",
              fontSize: "14px",
              height: "70px",
              width: "1100px",
              paddingLeft: "30px",
            }}
          >
            Our birthday flowers include fresh roses, daisies, and more! Whether
            your birthday flower delivery is sent to home or office, you can be
            sure it will be received with a smile. Need your birthday flowers
            today? Same-day birthday delivery is available! With same-day flower
            delivery on orders placed by 2PM, no one has to know whether you
            ordered weeks ago or this morning. You can be sure our flowers for
            birthdays will send the right message.
          </p>
        </div>
      </div>

      <p
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
      </p>
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
              height: "280px",
              width: "270px",
              backgroundColor: "#65388B",
              marginTop: "10px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ color: "white", paddingTop: "15px" }}>
              FIND AVAILABLE PRODUCTS!
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
              height: "380px",
              width: "270px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            <div style={{ marginLeft: "15px" }}>
              <Text as="b">BIRTHDAY FLOWERS AND GIFTS</Text>

              <u>
                <p>All Birthday Gifts and</p>
              </u>
              <u>
                <p>Arrangements</p>
              </u>
              <u>
                <p>Same Day Birthday Delivery</p>
              </u>
              <u>
                <p>Birthday Cake Delivery</p>
              </u>
              <u>
                <p>Birthday Gift Baskets</p>
              </u>
              <u>
                <p>Birthday Plans</p>
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
                {" "}
                <p>Multi-Day Birthday Gifting</p>
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
                <p>Birthday Month flowers</p>
              </u>
              <u>
                <p>Birthday Party Traditions Around</p>
              </u>
              <u>
                <p>the world</p>
              </u>
              <u>
                <p>winnings Gift Ideas for Milestones</p>
              </u>
              <u>
                <p>birthdays</p>
              </u>
              <u>
                <p>How to Say "Happy Birthday" in 50 </p>
              </u>
              <u>
                <p>Different Languages</p>
              </u>
              <u>
                <p>What to Get Mom for her Birthday</p>
              </u>
              <u>
                <p>Message Ideas for Birthday cards</p>
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
              <Stack key={el.id}
               h={450}>
                {/* <Image src={el.image} h="320px"/> */}
                {/* <Heading h={50}>{el.title}</Heading> */}
                <Image
                  src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191167xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}"
                  alt="photo1"
                />
                {/* <Image  h="16px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=75&auto=webp&optimize={medium}" alt="pass"/> */}
                {/* <Text>{el.price}</Text> */}
                {/* <Text>{el.description}</Text> */}
                <img
                  style={{ marginLeft: "-99px", height: "14px" }}
                  src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=75&auto=webp&optimize={medium}"
                  alt=""
                />
                <h2 style={{ textAlign: "left", fontSize: "18px" }}>
                  Floral Embrace™
                </h2>
                {/* <h2 style={{Text:"b"}}>$49.99 - $79.99</h2> */}
                <Text
                  as="b"
                  style={{
                    textAlign: "left",
                    fontSize: "18px",
                    marginTop: "-2px",
                  }}
                >
                  $49.99 - $79.99
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Box>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Birthday;
