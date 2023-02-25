import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineCancelPresentation, MdOutlinePending } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FcProcess } from "react-icons/fc";

const Dashboard = () => {
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
            {/* <Box
              w={{ base: "5%", md: "10%", lg: "20%" }}
              h="80px"
              borderRadius="10px"
              border="2px solid black"
            > */}
            <Button
              color={"white"}
              leftIcon={<MdOutlinePending />}
              textStyle={"DashboardBoxes"}
              bgColor={"yellow.400"}
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
              bgColor={"#ff2941"}
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
              bgColor={"#2bbbe3"}
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
              bgColor={"#59d243"}
              p={{ base: 4, md: 6, lg: 8 }}
              size={{ base: "xs", md: "md", lg: "md" }}
            >
              <Text fontSize={{ base: "90%", md: "80%", lg: "90%" }}>
                {" "}
                TODAY'S INCOME{" "}
              </Text>
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
