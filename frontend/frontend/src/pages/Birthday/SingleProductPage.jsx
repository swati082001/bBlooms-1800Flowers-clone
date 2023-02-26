
import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronDownIcon,
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
} from "@chakra-ui/react";

import React from "react";

const SingleProductPage = () => {
  const [value, setValue] = React.useState("1");
  return (
    <div>
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
        <ArrowRightIcon boxSize={2} /> Birthday flower{" "}
        <ArrowRightIcon boxSize={2} /> Floral Embrace™
      </p>
      <div style={{ 
        border: "1px solid teal",
         display: "flex", gap: "15px" }}>
        <Card
          maxW="md"
          ml={20}
         border="1px solid "
        >
          <CardBody>
            <Image
              src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191167xlx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              {/* <Heading size='md'>Living room Sofa</Heading> */}

              <Text style={{ textAlign: "left" }}>
                Our local florists put love into every arrangement. Sometimes
                they have to substitute flower types, colors & containers to
                give you the freshest blooms available. Although your bouquet
                may vary from the photo shown, we promise your recipient will
                love it just as much!
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
        <div
          style={{
            // border: "1px solid red",
            width: "850px",
            height: "900px",
          }}
        >
          <h1 style={{ fontSize: "25px", textAlign: "left" }}>
            <Text as="b">Floral Embrace™</Text>
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
            </RadioGroup>

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
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              padding: "20px",
              marginTop: "20px",
              height: "150px",
              textAlign: "left",
              display: "flex",
              gap: "100px",
            }}
          >
            <Checkbox colorScheme="green" isInvalid>
              <Text as="b">Start a subscription & save 15% Off</Text>
            </Checkbox>
            {/* <Divider orientation='vertical' /> */}

            <div>
              <div
                style={{
                  borderLeft: "1px solid grey",
                  width: "350px",
                  display: "flex",
                  gap: "20px",
                  padding: "15px",
                  height: "50px",
                }}
              >
                <Text as="b">Frequency:</Text>
                <div>
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
                </div>
              </div>
              <div>
                <div>
                  <div
                    style={{
                      borderLeft: "1px solid grey",
                      width: "350px",
                      display: "flex",
                      gap: "20px",
                      padding: "15px",
                    }}
                  >
                    <Text as="b">Duration:</Text>
                    <div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              // border: "1px solid teal",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              padding: "20px",
              marginTop: "20px",
              height: "80px",
              textAlign: "left",
              display: "flex",
            }}
          >
            <Checkbox colorScheme="green" isInvalid></Checkbox>
            <img
              style={{ height: "25px", marginTop: "5px", marginLeft: "5px" }}
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
            <p style={{ marginLeft: "4px", marginTop: "4px" }}>
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
            <div style={{display:"flex"}}>
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

            <div
              style={{
                // border: "1px solid",
                width: "400px",
                marginLeft: "20px",
              }}
            >
              <p style={{color:"grey"}}>Location type</p>
              <Menu isLazy>
                <MenuButton>Residence<TriangleDownIcon ml={270}/></MenuButton>
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
            </div>
            </div>

            <div style={{ width: "1050px" }}>
              <Button
                marginTop="20px"
                marginLeft="20px"
                w="820px"
                h="54px"
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
              height: "50px",
              textAlign: "left",
            }}
          >
            <Text ml={200} as="b">
              DESIGNED & DELIVERED BY LOCAL SHOP
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
