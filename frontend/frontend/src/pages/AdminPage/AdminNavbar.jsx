import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "..//..//Styles/Admin.module.css";
import logo from "..//..//Images/logo.png";
import { useNavigate } from "react-router-dom";



const AdminNavbar = () => {
  let admin = true;
  const navigate = useNavigate()
  function handleLogout(){
      navigate("/")
      localStorage.removeItem("currentUser");
  }
  function handleImage(){
    navigate("/")
  }

  return (
    <div className={styles.navbar}>
      <Box
        width={"100%"}
        height="60px"
        color={"black"}
        boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
        bgColor="white"
      >
        <Flex justifyContent={"space-between"} alignItems="center">
          <Box>

            <Image
              onClick={handleImage}
              src={logo}
              w={{ base: "100px", md: "150px", lg: "140px" }}
              h="60px"
              alt="logo"
              ml="20px"
            />
          </Box>
          <Box mr="20px">
            {admin ? (
              <Flex
                justifyContent={"space-between"}
                alignItems="center"
                gap="30px"
              >
                <Box>
                  <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }}>
                    Suneet
                  </Text>
                </Box>
                <Box>
                  <Button
                    color={"black"}
                    bgColor="white"
                    _hover={{ bgColor: "purple.400", color: "white" }}
                    size={{ base: "xs", md: "md", lg: "md" }} onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Box>
              </Flex>
            ) : (
              <Box>
                <Button
                  color={"black"}
                  bgColor="white"
                  _hover={{ bgColor: "purple.400", color: "white" }}
                  size={{ base: "xs", md: "md", lg: "md" }}
                >
                  Login
                </Button>
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AdminNavbar;
