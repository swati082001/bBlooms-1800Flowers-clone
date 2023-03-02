import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  VStack,
  Card,
  Grid,
  CardBody,
  CardFooter,
  Avatar,
  Container,
  Toast,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addAdmin,
  getAdmin,
  removeAdmin,
} from "../../../Redux/AdminRedux/Admins/admin.action";

export default function AdminList() {
  let [signpCreds, setSignupCreds] = useState({});

  let { admins, isLoading, isError } = useSelector(
    (store) => store.adminManager
  );

  let dispatch = useDispatch();
  const toast = useToast();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setSignupCreds({ ...signpCreds, [name]: value });
  };

  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

  let getAgain = () => {
    setTimeout(() => {
      dispatch(getAdmin());
    }, 1000);
  };

  let handleDelete = (id) => {
    dispatch(removeAdmin(id));
    getAgain();
    toast({
      title: "Admin has been deleted",

      status: "success",
      duration: 5000,
      isClosable: true,
    });
    if (!isError && !isLoading) {
      dispatch(getAdmin());
    }
  };

  let handleClick = () => {
    dispatch(addAdmin(signpCreds));
    toast({
      title: "Admin has been added",
      description: "Now you can access users and products",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    if (!isError && !isLoading) {
      dispatch(getAdmin());
    }
  };

  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="auto" p={10} bgColor="#f7f7f7 ">
        <Card
          bgColor="#f7f7f7"
          margin="auto"
          p={{
            base: "6",
            md: "6",
            lg: "6",
          }}
          border="1px solid #2e3192 "
          borderRadius={8}
          w={{
            base: "95%",
            md: "90%",
            lg: "50%",
          }}
        >
          <FormControl textAlign="center">
            <VStack spacing={5}>
              <Heading fontSize={"lg"} textStyle="DashboardHead">
                Admin Registration form
              </Heading>
              <Input
                placeholder="Name"
                mt={4}
                name="name"
                onChange={handleChange}
              ></Input>
              <Input
                placeholder="Email"
                name="email"
                mt={4}
                onChange={handleChange}
              ></Input>
              <Input
                placeholder="Password"
                name="password"
                mt={4}
                type={"password"}
                onChange={handleChange}
              ></Input>

              <Input
                placeholder="state"
                type={"string"}
                mt={4}
                name="state"
                onChange={handleChange}
              ></Input>

              <Button
                onClick={handleClick}
                // bgColor="#19a598"
                bgColor="cyan.400"
                color="white"
                // _hover={{ backgroundColor: "#19a598" }}
                _hover={{ backgroundColor: "cyan.400" }}
                size={{
                  base: "xs",
                  md: "md",
                  lg: "md",
                }}
              >
                Add new Admin
              </Button>
            </VStack>
          </FormControl>
        </Card>

        <Box mt={"60px"}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color={"red"}
                size={"md"}
              >
                Admins
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color={"red"}
                size={"md"}
              >
                {`Total:-${admins.length}`}
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
          {admins.map((admin) => (
            <Card key={admin._id}>
              <CardBody>
                <Container>
                  <Avatar name={admin.name} src={admin.name} />
                  <Box mt={"20px"}>
                    <Flex>
                      <Text
                        fontSize={{
                          base: "xs",
                          md: "md",
                          lg: "md",
                        }}
                        as="b"
                      >
                        Admin Id-
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
                        {admin._id}
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
                        {admin.name}
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
                        width={{
                          base: "100px",
                          md: "50px",
                          lg: "200px",
                        }}
                      >
                        {admin.email}
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
                        State -
                      </Text>
                      <Text
                        fontSize={{
                          base: "xs",
                          md: "md",
                          lg: "md",
                        }}
                      >
                        {admin.state}
                      </Text>
                    </Flex>
                  </Box>
                </Container>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={() => handleDelete(admin._id)}
                  bgColor="cyan.400"
                  color="white"
                  _hover={{ backgroundColor: "red.500" }}
                  size={{
                    base: "xs",
                    md: "md",
                    lg: "md",
                  }}
                >
                  Delete Admin
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
