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
import { RiDeleteBinFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import {
  getFlower,
  removeFlower,
  updateFlower,
} from "../../../Redux/AdminRedux/Products/AnniversaryFlowers/AnniversaryFlowers.action";

const FlowerShops = () => {
  let [id, setId] = useState("");
  let [price, setPrice] = useState("");
  let { flowers } = useSelector((store) => store.flowerManager);
  let dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let toast = useToast();
  useEffect(() => {
    dispatch(getFlower());
  }, [dispatch]);

  let getAgain = () => {
    setTimeout(() => {
      dispatch(getFlower());
    }, 1000);
  };

  let handleUpdate = () => {
    onClose();
    let changes = { price: price };
    dispatch(updateFlower(id, changes));
    getAgain();
    toast({
      title: "Flower has been updated",

      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  let handleDelete = (id) => {
    dispatch(removeFlower(id));
    getAgain();
    toast({
      title: "Flower has been deleted",

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
                Flowers
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color={"red"}
                size={"md"}
              >
                {`Total:-${flowers.length}`}
              </Text>
            </Box>
          </Flex>
        </Box>
        <TableContainer mt="10">
          <Table variant="striped" colorScheme="pink">
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
              {flowers.map((flower) => (
                <Tr key={flower._id}>
                  <Td>{flower._id}</Td>
                  <Td>{flower.company}</Td>
                  <Td>{flower.type}</Td>
                  <Td>{flower.size}</Td>
                  <Td>
                    <Image src={flower.image} alt={flower._id} />
                  </Td>
                  <Td>₹ {flower.price}</Td>
                  <Td>
                    <Button
                      bgColor={"pink.300"}
                      _hover={{ bgColor: "pink.400" }}
                      onClick={onOpen}
                    >
                      UPDATE
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      _hover={{ color: "red.500" }}
                      variant="ghost"
                      onClick={() => handleDelete(flower._id)}
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
              bgColor={"pink.300"}
              _hover={{ bgColor: "pink.400" }}
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

export default FlowerShops;
