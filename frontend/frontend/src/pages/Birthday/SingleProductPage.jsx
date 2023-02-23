import { ArrowRightIcon } from "@chakra-ui/icons";
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
      <div style={{ border: "1px solid teal", display: "flex", gap: "15px" }}>
        <Card maxW="md" ml={20} 
        // border="1px solid "
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
            width: "850px", height: "900px" }}
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
                <Radio size="lg" value="1">
                  <Text as="b">Extra Large</Text>
                </Radio>
                <Radio size="lg" value="2">
                  <Text as="b">Large</Text>
                </Radio>
                <Radio size="lg" value="3">
                  <Text as="b">Midium</Text>
                </Radio>
                <Radio size="lg" value="4">
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
              height: "120px",
              textAlign: "left",
            }}
          >
            <Checkbox colorScheme="green" isInvalid>
              <Text as="b">Start a subscription & save 15% Off</Text>
            </Checkbox>
          </div>

          <div
            style={{
              border: "1px solid teal",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              padding: "20px",
              marginTop: "20px",
              height: "80px",
              textAlign: "left",
            }}
          ></div>

          <div
            style={{
              border: "1px solid black",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              padding: "20px",
              marginTop: "20px",
              height: "200px",
              textAlign: "left",
            }}
          ></div>

          <div
            style={{
              border: "1px solid black",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              padding: "20px",
              marginTop: "20px",
              height: "50px",
              textAlign: "left",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
