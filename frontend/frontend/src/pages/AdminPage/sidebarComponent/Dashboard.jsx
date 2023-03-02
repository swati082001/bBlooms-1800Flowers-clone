import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MdOutlineCancelPresentation, MdOutlinePending } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FcProcess } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  removeCart,
} from "../../../Redux/AdminRedux/Cart/cart.action";

import { RiDeleteBinFill } from "react-icons/ri";

const Dashboard = () => {
  let { carts } = useSelector((store) => store.cartManager);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  let getAgain = () => {
    setTimeout(() => {
      dispatch(getCart());
    }, 2000);
  };

  let handleDelete = (id) => {
    dispatch(removeCart(id));
    getAgain();
  };
  let sum = 0;
  carts.map((el) => (sum = sum + el.price));
  let ans = sum.toFixed(2);

  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="700px" p={10} bgColor="#f7f7f7 ">
        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Heading color={"#65388b"} size={"md"}>
            Dashboard
          </Heading>
        </Box>
        <Box w="100%" mt={6} p={3}>
          <Flex
            justifyContent={"space-evenly"}
            direction={{ base: "column", md: "row", lg: "row" }}
            gap={{ base: "20px", md: "20px", lg: "0px" }}
          >
            <Button
              color={"white"}
              leftIcon={<MdOutlinePending />}
              textStyle={"DashboardBoxes"}
              bgColor={"yellow.400"}
              _hover={{ bgColor: "yellow.500" }}
              p={{ base: 4, md: 6, lg: 8 }}
              size={{ base: "xs", md: "md", lg: "md" }}
            >
              <Text fontSize={{ base: "90%", md: "80%", lg: "90%" }}>
                ORDER PENDING
              </Text>
            </Button>
            {/* </Box> */}

            <Button
              color={"white"}
              leftIcon={<MdOutlineCancelPresentation />}
              textStyle={"DashboardBoxes"}
              bgColor={"red.400"}
              _hover={{ bgColor: "red.500" }}
              p={{ base: 4, md: 6, lg: 8 }}
              size={{ base: "xs", md: "md", lg: "md" }}
            >
              <Text fontSize={{ base: "90%", md: "80%", lg: "90%" }}>
                ORDER CANCEL{" "}
              </Text>
            </Button>

            <Button
              color={"white"}
              leftIcon={<FcProcess />}
              textStyle={"DashboardBoxes"}
              bgColor={"cyan.400"}
              _hover={{ bgColor: "cyan.500" }}
              p={{ base: 4, md: 6, lg: 8 }}
              size={{ base: "xs", md: "md", lg: "md" }}
            >
              <Text fontSize={{ base: "90%", md: "80%", lg: "90%" }}>
                ORDER PROCESS{" "}
              </Text>
            </Button>

            <Button
              color={"white"}
              leftIcon={<HiOutlineCurrencyRupee />}
              textStyle={"DashboardBoxes"}
              bgColor={"green.400"}
              _hover={{ bgColor: "green.500" }}
              p={{ base: 4, md: 6, lg: 8 }}
              size={{ base: "xs", md: "md", lg: "md" }}
            >
              <Text fontSize={{ base: "90%", md: "80%", lg: "90%" }}>
                TODAY'S INCOME{" "}
              </Text>
            </Button>
          </Flex>
        </Box>

        <Box mt="60px">
          <Box>
            <Flex justifyContent={"space-between"}>
              <Box>
                <Text
                  fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                  color={"red"}
                  size={"md"}
                >
                  Carts
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                  color={"red"}
                  size={"md"}
                >
                  {`Total (${carts.length}) :- ₹ ${ans}`}
                </Text>
              </Box>
            </Flex>
          </Box>
          <TableContainer mt={7}>
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th>ORDER ID</Th>
                  <Th>TYPE</Th>

                  <Th> PRICE</Th>
                  <Th>REMOVE</Th>
                </Tr>
              </Thead>
              <Tbody>
                {carts.map((cart) => (
                  <Tr key={cart._id}>
                    <Td>{cart._id}</Td>
                    <Td>{cart.type}</Td>

                    <Td>₹ {cart.price}</Td>
                    <Td>
                      {" "}
                      <Button
                        _hover={{ color: "red.500" }}
                        variant="ghost"
                        onClick={() => handleDelete(cart._id)}
                      >
                        <RiDeleteBinFill />
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
