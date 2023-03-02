import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsInbox } from "react-icons/bs";
import { RiDeleteBinFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

import {
  getCake,
  removeCake,
  updateCake,
} from "../../../Redux/AdminRedux/Products/BirthDayCakes/BirthDayCakes.action";

const CakeShops = () => {
  let [id, setId] = useState("");
  let [price, setPrice] = useState("");
  let { cakes } = useSelector((store) => store.cakeManager);
  let dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let toast = useToast();
  useEffect(() => {
    dispatch(getCake());
  }, [dispatch]);

  let getAgain = () => {
    setTimeout(() => {
      dispatch(getCake());
    }, 1000);
  };

  let handleUpdate = () => {
    onClose();
    let changes = { price: price };
    dispatch(updateCake(id, changes));
    getAgain();
    toast({
      title: "Cake has been updated",

      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  let handleDelete = (id) => {
    dispatch(removeCake(id));
    getAgain();
    toast({
      title: "Cake has been deleted",

      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Box w="100%" mt="50px" h="auto" p={10} bgColor="#f7f7f7">
        <Box>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color={"red"}
                size={"md"}
              >
                Cakes
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color={"red"}
                size={"md"}
              >
                {`Total:-${cakes.length}`}
              </Text>
            </Box>
          </Flex>
        </Box>
        <TableContainer mt="10">
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>ORDER ID</Th>
                <Th>COMPANY</Th>
                <Th>TYPE</Th>
                <Th>SIZE</Th>
                <Th>IMAGE</Th>
                <Th>PRICE</Th>
                <Th>UPDATE</Th>
                <Th>DELETE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cakes.map((cake) => (
                <Tr key={cake._id}>
                  <Td>{cake._id}</Td>
                  <Td>{cake.company}</Td>
                  <Td>{cake.type}</Td>
                  <Td>{cake.size}</Td>
                  <Td>
                    <Image src={cake.image} alt={cake._id} />
                  </Td>
                  <Td>₹ {cake.price}</Td>
                  <Td>
                    <Button
                      bgColor={"cyan.300"}
                      _hover={{ bgColor: "cyan.400" }}
                      onClick={onOpen}
                    >
                      UPDATE
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      _hover={{ color: "red.500" }}
                      variant="ghost"
                      onClick={() => handleDelete(cake._id)}
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={5}>
              <Input
                placeholder="Enter Product Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <Input
                placeholder="Enter Updated Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor={"cyan.300"}
              _hover={{ bgColor: "cyan.400" }}
              onClick={handleUpdate}
            >
              UPDATE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CakeShops;
