import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUser,
  removeUser,
} from "../../../Redux/AdminRedux/Users/user.action";

const UsersPage = () => {
  let { users } = useSelector((store) => store.userManager);
  let totalUsers = users.length;
  let dispatch = useDispatch();
  let toast = useToast();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  let getAgain = () => {
    setTimeout(() => {
      dispatch(getUser());
    }, 1000);
  };

  let handleDelete = (id) => {
    dispatch(removeUser(id));
    getAgain();
    toast({
      title: "User has been deleted",

      status: "success",
      duration: 5000,
      isClosable: true,
    });

    dispatch(getUser());
  };

  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="700px" p={10} bgColor="#f7f7f7 ">
        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Heading color={"#65388b"} size={"md"}>
            User Details
          </Heading>
        </Box>

        <Box mt={"60px"}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color={"red"}
                size={"md"}
              >
                Users
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color={"red"}
                size={"md"}
              >
                {`Total:-${users.length}`}
              </Text>
            </Box>
          </Flex>
        </Box>

        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
          }}
          mt="60px"
          justifyContent={"space-between"}
          gap="20px"
        >
          {users.map((el) => (
            <Card key={el._id}>
              <CardBody>
                <Flex>
                  <Text
                    fontSize={{
                      base: "xs",
                      md: "md",
                      lg: "md",
                    }}
                    as="b"
                  >
                    User Id -
                  </Text>
                  <Text
                    fontSize={{
                      base: "xs",
                      md: "md",
                      lg: "md",
                    }}
                    width={{
                      base: "100px",
                      md: "80px",
                      lg: "100px",
                    }}
                  >
                    {el._id}
                  </Text>
                </Flex>

                <Flex>
                  <Text
                    fontSize={{
                      base: "xs",
                      md: "md",
                      lg: "md",
                    }}
                    as="b"
                  >
                    Name -
                  </Text>
                  <Text
                    fontSize={{
                      base: "xs",
                      md: "md",
                      lg: "md",
                    }}
                  >
                    {el.name}
                  </Text>
                </Flex>

                <Flex>
                  <Text
                    fontSize={{
                      base: "xs",
                      md: "md",
                      lg: "md",
                    }}
                    as="b"
                  >
                    Email -
                  </Text>
                  <Text
                    fontSize={{
                      base: "xs",
                      md: "md",
                      lg: "md",
                    }}
                  >
                    {el.email}
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    fontSize={{
                      base: "xs",
                      md: "md",
                      lg: "md",
                    }}
                    as="b"
                  >
                    City -
                  </Text>
                  <Text
                    fontSize={{
                      base: "xs",
                      md: "md",
                      lg: "md",
                    }}
                  >
                    {el.city}
                  </Text>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={() => handleDelete(el._id)}
                  bgColor="cyan.400"
                  color="white"
                  _hover={{ backgroundColor: "red.500" }}
                  size={{
                    base: "xs",
                    md: "md",
                    lg: "md",
                  }}
                >
                  Delete User
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default UsersPage;
