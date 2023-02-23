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
          <Heading color={"#65388b"}>Dashboard</Heading>
        </Box>
        <Box w="100%" mt={6} p={3}>
          <Flex justifyContent={"space-between"}>
            <Box
              w={{ base: "5%", md: "10%", lg: "20%" }}
              h="80px"
              borderRadius="10px"
            >
              <Button
                leftIcon={<MdOutlinePending />}
                textStyle={"DashboardBoxes"}
                bgColor={"#9181d9"}
                p={8}
                size={{ base: "xs", md: "md", lg: "md" }}
              >
                ORDER PENDING{" "}
              </Button>
            </Box>
            <Box w={"20%"} h="80px" borderRadius="10px">
              <Button
                leftIcon={<MdOutlineCancelPresentation />}
                textStyle={"DashboardBoxes"}
                bgColor={"#ff2941"}
                p={8}
              >
                ORDER CANCEL{" "}
              </Button>
            </Box>
            <Box w={"20%"} h="80px" borderRadius="10px">
              <Button
                leftIcon={<FcProcess />}
                textStyle={"DashboardBoxes"}
                bgColor={"#2bbbe3"}
                p={8}
              >
                ORDER PROCESS{" "}
              </Button>
            </Box>
            <Box w={"20%"} h="80px" borderRadius="10px">
              <Button
                leftIcon={<HiOutlineCurrencyRupee />}
                textStyle={"DashboardBoxes"}
                bgColor={"#59d243"}
                p={8}
              >
                TODAY'S INCOME{" "}
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
