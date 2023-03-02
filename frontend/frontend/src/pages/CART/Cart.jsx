import React from "react";
import {
  Box,
  Button,
  Card,
  CardFooter,
  Flex,
  Image,
  InputGroup,
  Select,
  Text,
  Input,
  InputRightAddon,
  Divider,
  UnorderedList,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import Styles from "./cart.module.css";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import CartFooter from "./CartFooter";
import { Navbar } from "../../Components/Navbar";
import { getCart, DeleteCart } from "../../Redux/CART-REDUX/cart.action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [select, setselect] = React.useState(1);
  const [coupStatus, setCoupStatus] = React.useState(false);
  const [coupon, setCoupon] = React.useState("");
  const [total, setTotal] = React.useState(0);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  let { cart } = useSelector((store) => store.cart);

  let sum = 0;
  let final = 0;
  let amount = 0;
  React.useEffect(() => {
    dispatch(getCart());
  }, []);

  function handleClick() {
    navigate("/checkout");
  }

  function handleDelete(id) {
    console.log("delete");
    dispatch(DeleteCart(id));
    setTimeout(() => {
      dispatch(getCart());
    }, 2000);
    console.log("deleted");
  }

  function handleCoupon() {
    if (coupon === "bblooms") {
      toast({
        title: "Coupon Successfully Applied",
        description: "Flat 30% discount applied!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      setCoupStatus(true);
    } else {
      toast({
        title: "Coupon Code Does Not Exist",
        description: "Oops! Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      setCoupStatus(false);
    }
  }

  return (
    <div className={Styles.cart}>
      <Navbar />
      <Box
        width={{ base: "100%", sm: "100%", md: "100%", lg: "75%" }}
        margin={{ base: "auto", sm: "auto", md: "auto", lg: "auto" }}
        h={"auto"}
      >
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent={{
            base: "space-around",
            sm: "space-around",
            md: "space-around",
            lg: "space-between",
          }}
        >
          <Box
            width={{ base: "100%", sm: "100%", md: "70%", lg: "60%" }}
            margin={"auto"}
            h={{ base: "auto", sm: "auto", md: "900px", lg: "900px" }}
            mt={"100px"}
            p={{ base: 4, sm: 4, md: 4, lg: 4 }}
          >
            <Text textStyle="Carthead">Shopping Cart</Text>
            <Card bg={"white"} mt="20px" p={4} border="2px solid #65388b">
              <Text textStyle="Cardtop">
                Items {cart.length} out of {cart.length}:
              </Text>
              <hr />

              {cart.map((el) => (
                <Box key={el._id} mt={"25px"}>
                  <Flex justifyContent={"space-between"}>
                    <Image w={"20%"} src={el.image}></Image>

                    <Box textAlign={"initial"}>
                      <Text textStyle="Cardtop">{el.type}</Text>
                      <Text textStyle="CartBody">Item# :{el._id} </Text>
                      <Text textStyle="CartBody">Sold By : {el.company}</Text>
                      <Text textStyle="CartBody">
                        Price : {Number(el.price * select)}
                      </Text>
                      <Flex>
                        <Text textStyle="CartBody" mr={"15px"}>
                          Qty:{" "}
                        </Text>
                        <Select
                          variant="filled"
                          width={"100px"}
                          onChange={(e) => setselect(e.target.value)}
                        >
                          <option value="1"> 1</option>
                          <option value="2"> 2</option>
                          <option value="3"> 3</option>
                          <option value="4"> 4</option>
                          <option value="5"> 5</option>
                          <option value="6"> 6</option>
                          <option value="7">7 </option>
                          <option value="8">8 </option>
                          <option value="9">9 </option>
                          <option value="10">10 </option>
                        </Select>
                      </Flex>
                    </Box>
                    <Box>
                      <DeleteIcon
                        onClick={() => handleDelete(el._id)}
                        w={6}
                        h={8}
                        color="#65388b"
                      />
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Card>

            <Card bg={"white"} mt="20px" p={4} border="2px solid #65388b">
              <Text mb={"20px"} textStyle="Cardtop">
                Cart Items: {cart.length}
              </Text>
              <Button
                bg="#00c876"
                color={"white"}
                _hover={{
                  bg: "#00c876",
                  color: "white",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                onClick={handleClick}
              >
                PROCEED TO CHECKOUT
              </Button>
            </Card>
          </Box>

          {/* 2ndpart */}
          <Box
            width={{ base: "100%", sm: "100%", md: "35%", lg: "43%" }}
            margin={"auto"}
            h={{ base: "auto", sm: "auto", md: "900px", lg: "900px" }}
            mt={"100px"}
            p={{ base: 4, sm: 4, md: 4, lg: 4 }}
          >
            <Card>
              <Button
                bg="#00c876"
                color={"white"}
                _hover={{
                  bg: "#00c876",
                  color: "white",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                onClick={handleClick}
              >
                PROCEED TO CHECKOUT
              </Button>
            </Card>

            <Card mt={"20px"} p={4} border="2px solid #65388b">
              <Text mb={"20px"} textStyle="Cardtop">
                Order Summary
              </Text>
              {coupStatus === false ? (
                <InputGroup>
                  <Input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Add Coupon Code"
                  />
                  <InputRightAddon
                    onClick={handleCoupon}
                    textStyle="CardTop"
                    color="#00c876"
                  >
                    APPLY
                  </InputRightAddon>
                </InputGroup>
              ) : (
                <Box w="100%" mt={2}>
                  <Flex justifyContent="space-between">
                    <Text textStyle="CardTop">PROMO : </Text>
                    <Text textStyle="CardTop">
                      {cart.forEach((el) => {
                        final = final + el.price;
                      })}
                      ₹ -{(30 / 100) * final}
                    </Text>
                  </Flex>
                </Box>
              )}
              {/* <InputGroup>
                  <Input placeholder="Add Coupon Code"/>
                  <InputRightAddon textStyle="SinglePageHead" >APPLY</InputRightAddon>
                </InputGroup> */}
              <br />
              <Divider />
              <br />
              <Text mb={"20px"} textStyle="Cardtop">
                PRICE DETAILS
              </Text>

              <Box w="100%" mt={1}>
                <Flex justifyContent="space-between">
                  <Text textStyle="Cardtop">Price ({cart.length})</Text>
                  <Text textStyle="CartBody">
                    ₹{" "}
                    {cart.forEach((el) => {
                      sum = sum + el.price;
                    })}{" "}
                    {Math.floor(sum)}
                  </Text>
                </Flex>
              </Box>

              <Box w="100%" mt={2}>
                <Flex justifyContent="space-between">
                  <Text textStyle="Cardtop">Delivery Charges</Text>
                  <Text textStyle="CartBody" color="green">
                    FREE
                  </Text>
                </Flex>
              </Box>

              <br />
              <Divider />
              <Box w="100%" mt={2}>
                <Flex justifyContent="space-between">
                  <Text textStyle="Cardtop">AMOUNT</Text>
                  <Text textStyle="CartBody" color="green">
                    {cart.forEach((el) => {
                      amount = amount + el.price;
                    })}
                    ₹{" "}
                    {coupStatus
                      ? Math.floor(amount - (30 / 100) * amount)
                      : Math.floor(amount)}
                  </Text>
                </Flex>
              </Box>
              <br />
              <Divider />
              <CardFooter bg={"#e3f1ec "}>
                <Flex direction={"column"}>
                  <Text textStyle="CartBody">
                    FREE SHIPPING/ No Service Charge for year across our brands.
                    Just ₹399.00/year
                  </Text>
                  <br></br>
                  <Image
                    width={"50%"}
                    src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc723326dc66beda5/image-20220307-142252.png"
                    alt=""
                  ></Image>

                  <UnorderedList listStyleType={"none"} mt="20px">
                    <ListItem>
                      <Flex>
                        <CheckIcon
                          w={5}
                          h={6}
                          color="#00c876"
                          mr={4}
                        ></CheckIcon>
                        <Text textStyle="CartBody">Free Shipping</Text>
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex>
                        <CheckIcon
                          w={5}
                          h={6}
                          color="#00c876"
                          mr={4}
                        ></CheckIcon>
                        <Text textStyle="CartBody">
                          No Service Charge When You Order 2-Business Days in
                          Advance
                        </Text>
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex>
                        <CheckIcon
                          w={5}
                          h={6}
                          color="#00c876"
                          mr={4}
                        ></CheckIcon>
                        <Text textStyle="CartBody">
                          Reduce & Expedited Shipping/Service Fees Options
                        </Text>
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex>
                        <CheckIcon
                          w={5}
                          h={6}
                          color="#00c876"
                          mr={4}
                        ></CheckIcon>
                        <Text textStyle="CartBody">
                          Earn Points to Unlock Rewards and Perks
                        </Text>
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex>
                        <CheckIcon
                          w={5}
                          h={6}
                          color="#00c876"
                          mr={4}
                        ></CheckIcon>
                        <Text textStyle="CartBody">
                          No Minimums or Promo Codes Needed
                        </Text>
                      </Flex>
                    </ListItem>

                    <ListItem>
                      <Flex>
                        <CheckIcon
                          w={5}
                          h={6}
                          color="#00c876"
                          mr={4}
                        ></CheckIcon>
                        <Text textStyle="CartBody">
                          Automatically Renews, Cancel Anytime
                        </Text>
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
      <CartFooter />
    </div>
  );
};

export default Cart;
