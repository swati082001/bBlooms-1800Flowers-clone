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
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function AdminList() {
  const [showPassword, setShowPassword] = useState(false);
  let [signpCreds, setSignupCreds] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;
    setSignupCreds({ ...signpCreds, [name]: value });
  };
  console.log(signpCreds);

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Box width="84%" p={10} bgColor="#f7f7f7 " marginLeft="16%" h="auto">
        <Flex align={"center"} justify={"center"} bg={"#f7f7f7 "}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Admin Registeration Form
              </Heading>
            </Stack>
            <Box rounded={"lg"} bg="##f7f7f7 " p={8}>
              <Stack spacing={4}>
                <form onSubmit={handleSubmit}>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" name="email" onChange={handleChange} />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={handleChange}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"teal"}
                      color={"white"}
                      _hover={{
                        bg: "teal",
                      }}
                      type="submit"
                    >
                      Sign up
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
}
