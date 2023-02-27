import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  grid,
  Image,
  Img,
  Input,
  
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const Sympathy = () => {
  let [prod, setprod] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setcount] = useState(0);
  const [query, setQuery] = useState("");

  let getdata = () => {
    axios
      .get("https://weary-red-oyster.cyclic.app/products/plantbirth")
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
          gap: "30px",
          display: "flex",
          marginTop: "80px",
          //  border: "1px solid blue",
        }}
      >
        <div style={{ marginLeft: "10px" }}>
          <Text
            style={{
              fontSize: "24px",
              color: "#65388B",
              marginTop: "10px",
              width: "320px",
            }}
            textStyle="Carthead"
          >
            Sympathy & Memorial Plants
          </Text>
        </div>
        {/* <p style={{fontSize:"50px"}}>|</p> */}
        <div style={{ borderLeft: "1px solid #757575" }}>
          <p
            style={{
              textAlign: "left",
              fontSize: "16px",
              height: "70px",
              width: "980px",
              paddingLeft: "30px",
              // border:"1px solid red"
            }}
          >
            Express yourself perfectly during times of sorrow with an elegant,
            living sympathy plant. As opposed to flowers, plants will continue
            to serve as a tribute to a life well-lived long after the funeral
            service is over. If you need assistance, please contact our
            Specialty Sympathy Advisors toll free at 1-866-538-2259.
            <u style={{ marginLeft: "10px", color: "#65388B" }}> Read more</u>
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
        {/* Home <ArrowRightIcon boxSize={2} /> Sympathy{" "}
        <ArrowRightIcon boxSize={2} /> Sympathy & Memorial Plants */}

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
            <BreadcrumbLink href="#">Sympathy</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Sympathy & Memorial Plants</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
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
              //   border: "1px solid red",
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
                marginLeft: "8px",
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
              height: "430px",
              width: "270px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            <div style={{ marginLeft: "15px" }}>
              <Text as="b">SHOP PLANT TYPES</Text>

              <u>
                <p>All Plants</p>
              </u>
              <u>
                <p>Best Selling Plants</p>
              </u>
              <u>
                <p>Same Day Plant Delivery</p>
              </u>
              <u>
                <p>Cacti,Terrariums $& Succulents</p>
              </u>
              <u>
                <p>Dish Gardens</p>
              </u>
              <u>
                <p>Bonsai trees</p>
              </u>
              <u>
                <p>Bamboo plants</p>
              </u>
              <u>
                <p>Funeral plants</p>
              </u>
              <u>
                <p>Get well plants</p>
              </u>
              <u>
                <p>Green Plants</p>
              </u>
              <u>
                <p>House Plants</p>
              </u>
              <u>
                {" "}
                <p>Celebration trees</p>
              </u>
              <u>
                <p>Outdoor plants</p>
              </u>
              <u>
                <p>Plant Sale</p>
              </u>
              <u>
                <p>Fair Trade Plant</p>
              </u>
            </div>
          </div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "220px",
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
              <Text as="b">SHOP FLOWERING PLANTS</Text>
              <u>
                <p>All Flowering Plants</p>
              </u>
              <u>
                <p>Azalea Plants</p>
              </u>
              <u>
                <p>Hydrangea plants</p>
              </u>
              <u>
                <p>Rose Plants</p>
              </u>
              <u>
                <p>Gardenia Plants</p>
              </u>
              <u>
                <p>Chrysanthemum </p>
              </u>
            </div>
          </div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "150px",
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
              <Text as="b">SHOP SEASONAL PLANTS</Text>
              <u>
                <p>Christmas Plants - Coming</p>
              </u>
              <u>
                <p>December</p>
              </u>
              <u>
                <p>Poinsettias - Coming December</p>
              </u>
              <u>
                <p>Flower Bulbs - Coming February</p>
              </u>
            </div>
          </div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "300px",
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
              <Text as="b">RELATED CONTENT</Text>
              <u>
                <p>Sympathy Flowers & Gifts</p>
              </u>
              <u>
                <p>Condolence & Bereavement</p>
              </u>
              <u>
                <p>Flowers</p>
              </u>
              <u>
                <p>Same day Sympathy flowers</p>
              </u>
              <u>
                <p>Sympathy Gift Baskets</p>
              </u>
              <u>
                <p>Sympathy Flower Baskets</p>
              </u>
              <u>
                <p>Remembarance Gifts</p>
              </u>
              <u>
                <p>Faith-Inspired Gifts</p>
              </u>
              <u>
                <p>Pet Sympathy </p>
              </u>
              {/* <u><p></p></u>
            <u><p></p></u>
            <u><p></p></u>
            <u><p></p></u>
            <u><p></p></u> */}
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

        {/* <div>
          <div
            style={{
             border: "1px solid red",
              height: "8000px",
              width: "1030px",
              backgroundColor: "#FFFFFF",
              display:grid,
             
            }}
          >
           


          </div>
        </div> */}

        {/* map */}

        <Box>
          <SimpleGrid gap={5} columns={{ base: 1, md: 2, lg: 3 }}>
            {prod.map((el) => (
              <Stack h={450}>
                <Link to={`/sympathy/${el._id}`}>
                  <Image src={el.image} h="360px" />
                </Link>

                <Img
                  style={{ marginLeft: "-100px", height: "14px" }}
                  src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=75&auto=webp&optimize={medium}"
                  alt="passport_pic"
                />
                <h2 style={{ textAlign: "left", fontSize: "18px" }}>
                  {el.type}
                </h2>
                <h2 style={{ textAlign: "left" }}>
                  <Text as="b">{el.price}</Text>
                </h2>
                <Text
                  as="b"
                  style={{
                    textAlign: "left",
                    fontSize: "18px",
                    marginTop: "-2px",
                  }}
                ></Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Box>
      </div>
    </>
  );
};

export default Sympathy;
