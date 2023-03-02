import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Toast,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { FcPositiveDynamic } from "react-icons/fc";
import FlowerShops from "../shopsComponents/Flowers.shops";
import CakeShops from "../shopsComponents/Cakes.shops";
import PlantShops from "../shopsComponents/Plants.shops";

import {
  addCake,
  getCake,
} from "../../../Redux/AdminRedux/Products/BirthDayCakes/BirthDayCakes.action";

import {
  addFlower,
  getFlower,
} from "../../../Redux/AdminRedux/Products/AnniversaryFlowers/AnniversaryFlowers.action";

import {
  addPlant,
  getPlant,
} from "../../../Redux/AdminRedux/Products/SympathyPlants/SympathyPlants.action";
const Shops = () => {
  let [flower, setFlower] = useState(true);
  let [cake, setCake] = useState(false);
  let [plant, setPlant] = useState(false);

  let [category, setCategory] = useState("");
  let [id, setId] = useState("");
  let [image, setImage] = useState("");
  let [type, setType] = useState("");
  let [size, setSize] = useState("");
  let [price, setPrice] = useState("");
  let [company, setCompany] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  let dispatch = useDispatch();

  let handleFlower = () => {
    setFlower(true);
    setCake(false);
    setPlant(false);
  };

  let handleCake = () => {
    setFlower(false);
    setCake(true);
    setPlant(false);
  };

  let handlePlant = () => {
    setFlower(false);
    setCake(false);
    setPlant(true);
  };

  useEffect(() => {
    dispatch(getCake());
    dispatch(getFlower());
    dispatch(getPlant());
  }, [dispatch]);

  let getAgainFlower = () => {
    setTimeout(() => {
      dispatch(getFlower());
    }, 2000);
  };

  let getAgainCake = () => {
    setTimeout(() => {
      dispatch(getCake());
    }, 2000);
  };

  let getAgainPlant = () => {
    setTimeout(() => {
      dispatch(getPlant());
    }, 2000);
  };

  let handleAdd = () => {
    let addingSchema = {
      category: category,
      id: id,
      image: image,
      type: type,
      size: size,
      price: price,
      company: company,
    };

    if (addingSchema.category === "flowers") {
      onClose();
      dispatch(addFlower(addingSchema));
      getAgainFlower();
    } else if (addingSchema.category === "cakes") {
      onClose();
      dispatch(addCake(addingSchema));
      getAgainCake();
    } else if (addingSchema.category === "plants") {
      onClose();
      dispatch(addPlant(addingSchema));
      getAgainPlant();
    }
    toast({
      title: `${category} has been added`,
      description: "Now you can access see products",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="700px" p={10} bgColor="#f7f7f7 ">
        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Heading color={"#65388b"} size={"md"}>
            Products
          </Heading>
        </Box>
        <Box
          w="100%"
          bgColor="#e8ecef "
          marginTop={7}
          padding={5}
          height="auto"
        >
          <Flex
            justifyContent={"space-between"}
            gap={2}
            direction={{ base: "column", md: "column", lg: "row" }}
          >
            <Box>
              <Flex gap={2}>
                <Box>
                  <Text textStyle="DashboardHead" color={"red"}>
                    BE CAUTIOUS WHILE PERFORMING OPERATIONS
                  </Text>
                </Box>
                <Box color="red" fontSize="xl">
                  <CgDanger />
                </Box>
              </Flex>
            </Box>
            <Box>
              <Button
                bgColor={"cyan.300"}
                color="white"
                leftIcon={<AiOutlinePlus />}
                size={{
                  base: "xs",
                  md: "md",
                  lg: "md",
                }}
                _hover={{ backgroundColor: "cyan.400" }}
                onClick={onOpen}
              >
                ADD PRODUCT
              </Button>
            </Box>
          </Flex>
        </Box>
        {/* Adding Products through modal */}
        <Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Products</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack spacing={5}>
                  <Select
                    placeholder="Select Category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="flowers">flowers</option>
                    <option value="cakes">cakes</option>
                    <option value="plants">plants</option>
                  </Select>
                  <Input
                    placeholder="Add ID"
                    value={id}
                    type="string"
                    onChange={(e) => setId(e.target.value)}
                  />
                  <Input
                    placeholder="Add Image"
                    value={image}
                    type="string"
                    onChange={(e) => setImage(e.target.value)}
                  />
                  <Input
                    placeholder="Add Type"
                    value={type}
                    type="string"
                    onChange={(e) => setType(e.target.value)}
                  />
                  <Input
                    placeholder="Add Size"
                    value={size}
                    type="string"
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <Input
                    placeholder="Add Price"
                    value={price}
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <Input
                    placeholder="Add Company"
                    value={company}
                    type="string"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </VStack>
              </ModalBody>

              <ModalFooter>
                <Button
                  bgColor={"cyan.300"}
                  _hover={{ backgroundColor: "cyan.400" }}
                  onClick={handleAdd}
                >
                  Add Product
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        {/* Filter Part */}
        <Box mt={10} mr={1540}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bgColor={"cyan.300"}
              _hover={{ backgroundColor: "cyan.400" }}
            >
              Filter
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleFlower}>flowers</MenuItem>
              <MenuItem onClick={handleCake}>cakes</MenuItem>
              <MenuItem onClick={handlePlant}>plants</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          {flower && <FlowerShops />}
          {cake && <CakeShops />}
          {plant && <PlantShops />}
        </Box>
      </Box>
    </div>
  );
};

export default Shops;
