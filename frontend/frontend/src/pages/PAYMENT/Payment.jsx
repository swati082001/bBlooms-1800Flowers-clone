import React from "react";
import {
  Box,
  Flex,
  Card,
  Text,
  Image,
  FormControl,
  Input,
  FormErrorMessage,
  FormHelperText,
  Divider,
  CardFooter,
  ListItem,
  UnorderedList,
  VStack,
  FormLabel,
  Stack,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import Styles from "./Payment.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Checkout_get } from "../../Redux/CHECKOUT-REDUX/checkout.actions";
import { getUser } from "../../Redux/AdminRedux/Users/user.action";
import { getCart } from "../../Redux/CART-REDUX/cart.action";

const Payment = () => {
  const [cardName, setCardName] = React.useState("" || "Swati Mohanty");
  const [num, setCardNum] = React.useState(0 || 4984473867382367);
  const [openOtp, setOpenOtp] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phone, setPhone] = React.useState(0);
  const [otp, setOtp] = React.useState(0);
  const auth = getAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const { users } = useSelector((store) => store.userManager);
  const { cart } = useSelector((store) => store.cart);
  const { checkout } = useSelector((store) => store.checkout);
  const dispatch = useDispatch();
  console.log(users);
  console.log(cart);
  let firstObj;
  setTimeout(() => {
    firstObj = checkout[0];
  }, 2000);
  // console.log(checkout[0]);

  React.useEffect(() => {
    dispatch(Checkout_get());
    dispatch(getCart());
    dispatch(getUser());
  }, []);

  let sum = 0;
  let final = 0;

  const NoCardName = cardName === "";
  const NoNum = num === 0;

  function configureCaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response, "response");
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("recaptcha verified");
          openOtpfunc();
        },
      },
      auth
    );
  }

  async function openOtpfunc(e) {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = `+91${phone}`;
    const appVerifier = window.recaptchaVerifier;
    console.log(phoneNumber);

    const get = await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("ho gaya", confirmationResult);
      })
      .catch((err) => {
        console.log("Nhi hua");
      });

    setOpenOtp(true);
    onOpen();
  }

  function onSubmitOTP(e) {
    e.preventDefault();
    const code = { otp };
    console.log(code);
    // window.confirmationResult.confirm(code).then((result) => {
    //   // User signed in successfully.
    //   const user = result.user;
    //   console.log(JSON.stringify(user));
    //   console.log("otp verified");
    //     // ...
    //   }).catch((error) => {
    //   // User couldn't sign in (bad verification code?)
    //   // ...
    //   });
    if (code !== "") {
      toast({
        position: "top",
        title: "Payment Successful",
        description: "Yeahhh! Payment is successfull",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        position: "top",
        title: "OTP not matched",
        description: "Please try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
    onClose();
    navigate("/");
  }

  console.log(otp);

  return (
    <div className={Styles.Payment}>
      <Box
        width={{ base: "100%", sm: "100%", md: "100%", lg: "75%" }}
        margin={"auto"}
        h={{ base: "auto", sm: "auto", md: "auto", lg: "auto" }}
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
          {/* first Part */}
          <Box
            width={{ base: "100%", sm: "100%", md: "70%", lg: "60%" }}
            margin={"auto"}
            h={{ base: "auto", sm: "auto", md: "900px", lg: "auto" }}
            p={{ base: 4, sm: 4, md: 4, lg: 4 }}
            position="relative"
          >
            <Text textStyle="Carthead">Payment Information</Text>
            <Card bg={"white"} mt="20px" p={4} border="2px solid #65388b">
              <Text textStyle="Cardtop">Payment Method:</Text>
              <hr />

              <Flex
                justifyContent={{
                  base: "space-between",
                  sm: "space-between",
                  md: "space-around",
                  lg: "space-around",
                }}
                mt="20px"
                mb={"20px"}
              >
                <Card p={2} pt={3} border="2px solid #65388b">
                  <Image
                    w={{ sm: "", base: "", md: "", lg: "50%" }}
                    ml={{ sm: "", base: "", md: "", lg: "25px" }}
                    src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt55a4652be9c043dd/632087e72975ce72ea2faf4f/card-logo.png"
                    alt=""
                  />
                </Card>
                <Card p={2} pt={3} border="2px solid #65388b">
                  <Image
                    w={{ sm: "", base: "", md: "", lg: "50%" }}
                    ml={{ sm: "", base: "", md: "", lg: "25px" }}
                    src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt18ea45241bb20e3a/632076f927d06f32eeaf01ff/paypal-logo-2.png"
                    alt=""
                  />
                </Card>
                <Card p={2} pt={3} border="2px solid #65388b">
                  <Image
                    w={{ sm: "", base: "", md: "", lg: "50%" }}
                    ml={{ sm: "", base: "", md: "", lg: "25px" }}
                    src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt517f493effcc3f73/632076f98966566ecdfbb10a/klarna-logo.png"
                    alt=""
                  />
                </Card>
              </Flex>

              <hr />
              <br />

              <Text textStyle="Cardtop" mb={"20px"}>
                <Flex>
                  Credit Or Debit Card:
                  <Image
                    w="5%"
                    ml="10px"
                    mr="10px"
                    src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/2018/mobile/visa-icon.png"
                    alt="visa logo"
                  />
                  <Image
                    w="5%"
                    ml="10px"
                    mr="10px"
                    src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/2018/mobile/amex-logo.png"
                    alt="amex logo"
                  />
                  <Image
                    w="5%"
                    ml="10px"
                    mr="10px"
                    src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/2018/mobile/discover-logo.png"
                    alt="discover logo"
                  />
                  <Image
                    w="5%"
                    ml="10px"
                    mr="10px"
                    src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/2018/mobile/discover-logo.png"
                    alt="mastercard logo"
                  />
                </Flex>
              </Text>

              {/* Billing DETAILS */}

              <form>
                <VStack gap={2}>
                  <FormControl isRequired isInvalid={NoCardName}>
                    <FormLabel>Name On Card</FormLabel>
                    <Input
                      type="text"
                      placeholder="Name On Card"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                    />
                    {!NoCardName ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Card Name is required.
                      </FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl isRequired isInvalid={NoNum}>
                    <FormLabel>Card Number</FormLabel>
                    <Input
                      type="number"
                      placeholder="Card Number"
                      value={num}
                      onChange={(e) => setCardNum(e.target.value)}
                    />
                    {!NoNum ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Card Number is required.
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </VStack>

                <FormControl>
                  <FormLabel>Expiry Date</FormLabel>
                  <Flex justifyContent="space-between">
                    <Stack direction="row" gap={"10px"}>
                      <Select placeholder="MM">
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sept">Sept</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                      </Select>
                      <Select placeholder="YYYY">
                        <option value="20">2020</option>
                        <option value="21">2021</option>
                        <option value="22">2022</option>
                        <option value="23">2023</option>
                        <option value="24">2024</option>
                      </Select>
                      <Input type="number" placeholder="CVV" />
                    </Stack>
                  </Flex>
                </FormControl>
                <Box textAlign={"initial"} mt="10px">
                  <Checkbox defaultChecked>
                    Save Card details for future payment.
                  </Checkbox>
                </Box>
              </form>

              <br />
              <hr />

              <br />
              <Text textStyle="Cardtop" mb={"20px"}>
                Contact Info:
              </Text>
              <Text textStyle={"CartBody"} mb="10px">
                Your email address :
              </Text>

              <form onSubmit={openOtpfunc}>
                <FormControl isRequired>
                  <Input
                    id="sign-in-button"
                    placeholder="PHONE NUMBER"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <FormHelperText>
                    Phone Number is required in case we need to contact you
                    about an order.
                  </FormHelperText>
                </FormControl>

                <br></br>
                <Box
                  bg={"#f5f5f5"}
                  textAlign="initial"
                  fontWeight={"500"}
                  fontSize="20px"
                  mb={"20px"}
                >
                  <Checkbox>Send me order updates via Text message.</Checkbox>
                  <br />
                  <Checkbox>Get exclusive offers via Text message.</Checkbox>
                  <br />
                  <Checkbox>Email me promotions ans special offers.</Checkbox>
                  <br />
                </Box>
                <FormControl>
                  <Input
                    type={"submit"}
                    bg="#00c876"
                    color={"white"}
                    _hover={{
                      bg: "#00c876",
                      color: "white",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                    value="SEND OTP"
                  />
                </FormControl>
              </form>

              {openOtp ? (
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>ONE TIME PASSWORD</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <form onSubmit={onSubmitOTP}>
                        <Input
                          placeholder="Enter otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />

                        <Input
                          mt={"20px"}
                          type={"submit"}
                          bg="#00c876"
                          color={"white"}
                          _hover={{
                            bg: "#00c876",
                            color: "white",
                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                          }}
                          value="submit"
                        />
                      </form>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              ) : null}
            </Card>
          </Box>

          {/* second part */}
          {/* second part */}
          <Box
            width={{ base: "100%", sm: "100%", md: "35%", lg: "43%" }}
            margin={"auto"}
            h={{ base: "auto", sm: "auto", md: "900px", lg: "900px" }}
            p={{ base: 4, sm: 4, md: 4, lg: 4 }}
            position={"sticky"}
          >
            <Card
              display={{ sm: "none", md: "none", base: "none", large: "block" }}
              mt={"20px"}
              p={4}
              borderTop="2px solid #65388b"
            >
              <Text textAlign={"center"} textStyle="Cardtop">
                Hello, User
              </Text>
            </Card>

            <Card mt={"20px"} p={4} border="2px solid #65388b">
              <Text mb={"20px"} textStyle="Cardtop">
                Order Summary
              </Text>

              <Text mb={"20px"} textStyle="Cardtop">
                PRICE DETAILS
              </Text>

              <Box w="100%" mt={1}>
                <Flex justifyContent="space-between">
                  <Text textStyle="Cardtop">Price ({cart.length})</Text>
                  <Text textStyle="CartBody">
                    ₹
                    {cart.forEach((el) => {
                      sum = sum + el.price;
                    })}{" "}
                    {Math.floor(sum)}
                  </Text>
                </Flex>
              </Box>

              <Divider />
              <Box w="100%" mt={2}>
                <Flex justifyContent="space-between">
                  <Text textStyle="Cardtop">AMOUNT</Text>
                  <Text textStyle="CartBody" color="green">
                    ₹
                    {cart.forEach((el) => {
                      final = final + el.price;
                    })}{" "}
                    {Math.floor(final)}
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
      </Box>
    </div>
  );
};

export default Payment;
