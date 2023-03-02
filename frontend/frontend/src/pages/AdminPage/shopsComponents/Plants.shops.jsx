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
  getPlant,
  removePlant,
  updatePlant,
} from "../../../Redux/AdminRedux/Products/SympathyPlants/SympathyPlants.action";
const PlantShops = () => {
  let [id, setId] = useState("");
  let [price, setPrice] = useState("");
  let { plants } = useSelector((store) => store.plantManager);
  let dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let toast = useToast();
  useEffect(() => {
    dispatch(getPlant());
  }, [dispatch]);

  let getAgain = () => {
    setTimeout(() => {
      dispatch(getPlant());
    }, 1000);
  };

  let handleUpdate = () => {
    onClose();
    let changes = { price: price };
    dispatch(updatePlant(id, changes));
    getAgain();
    toast({
      title: "Plant has been updated",

      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  let handleDelete = (id) => {
    dispatch(removePlant(id));
    getAgain();
    toast({
      title: "Plant has been deleted",

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
                Plants
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color={"red"}
                size={"md"}
              >
                {`Total:-${plants.length}`}
              </Text>
            </Box>
          </Flex>
        </Box>
        <TableContainer mt="10">
          <Table variant="striped" colorScheme="green">
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
              {plants.map((plant) => (
                <Tr key={plant._id}>
                  <Td>{plant._id}</Td>
                  <Td>{plant.company}</Td>
                  <Td>{plant.type}</Td>
                  <Td>{plant.size}</Td>
                  <Td>
                    <Image src={plant.image} alt={plant._id} />
                  </Td>
                  <Td>₹ {plant.price}</Td>
                  <Td>
                    <Button
                      bgColor={"green.300"}
                      _hover={{ bgColor: "green.400" }}
                      onClick={onOpen}
                    >
                      UPDATE
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      _hover={{ color: "red.500" }}
                      variant="ghost"
                      onClick={() => handleDelete(plant._id)}
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
              bgColor={"green.300"}
              _hover={{ bgColor: "green.400" }}
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

export default PlantShops;
