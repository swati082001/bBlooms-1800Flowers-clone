import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, removeUser } from "../../Redux/AdminRedux/user.action";

const UsersPage = () => {
  let { users } = useSelector((store) => store.userManager);
  let totalUsers = users.length;
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  let handleDelete = (id) => {
    dispatch(removeUser(id));
    console.log(id);
    dispatch(getUser());
  };

  console.log(users);
  console.log(totalUsers);
  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="700px" p={10} bgColor="#f7f7f7 ">
        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Heading color={"#65388b"} size={"md"}>
            User Details
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
          }}
          mt="30px"
          justifyContent={"space-between"}
          gap="20px"
        >
          {users.map((el) => (
            <Card key={el._id}>
              <CardBody>
                <Flex>
                  <Text as="b">User Id -</Text>
                  <Text>{el._id}</Text>
                </Flex>

                <Flex>
                  <Text as="b">Name -</Text>
                  <Text>{el.name}</Text>
                </Flex>

                <Flex>
                  <Text as="b">Email -</Text>
                  <Text>{el.email}</Text>
                </Flex>
                <Flex>
                  <Text as="b">City -</Text>
                  <Text>{el.city}</Text>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={() => handleDelete(el._id)}
                  bgColor="#19a598"
                  color="white"
                  _hover={{ backgroundColor: "red.500" }}
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
