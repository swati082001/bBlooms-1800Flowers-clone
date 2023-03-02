import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFlower } from "../../../Redux/AdminRedux/Products/AnniversaryFlowers/AnniversaryFlowers.action";
import { getCake } from "../../../Redux/AdminRedux/Products/BirthDayCakes/BirthDayCakes.action";
import { getPlant } from "../../../Redux/AdminRedux/Products/SympathyPlants/SympathyPlants.action";

const Categories = () => {
  let { cakes } = useSelector((store) => store.cakeManager);
  let { flowers } = useSelector((store) => store.flowerManager);
  let { plants } = useSelector((store) => store.plantManager);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlower());
    dispatch(getCake());
    dispatch(getPlant());
  }, []);

  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="700px" p={10} bgColor="#f7f7f7 ">
        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Heading color={"#65388b"} size={"md"}>
            Categories
          </Heading>
        </Box>
        <Box w="84%" ml="16%" mt="50px" h="auto" p={10} bgColor="#f7f7f7 ">
          <Grid
            justifyContent={"space-around"}
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
          >
            <Box w="90%" h="auto" bgColor="brown" p={6}>
              <Text as="b" fontSize={"2xl"} color="white">
                CAKES
              </Text>
              {cakes.map((cake) => (
                <Box key={cake._id} mt="5px" mb={5} bgColor="pink.300">
                  <Text textStyle="AdminNav">{cake.company}</Text>
                </Box>
              ))}
            </Box>

            <Box w="90%" h="auto" bgColor="pink.400" p={6}>
              <Text as="b" fontSize={"2xl"} color="white">
                FLOWERS
              </Text>
              {flowers.map((flower) => (
                <Box key={flower._id} mt="5px" mb={5} bgColor="pink.300">
                  <Text textStyle="AdminNav">{flower.company}</Text>
                </Box>
              ))}
            </Box>

            <Box w="90%" h="auto" bgColor="green.400" p={6}>
              <Text as="b" fontSize={"2xl"} color="white">
                PLANTS
              </Text>
              {plants.map((plant) => (
                <Box key={plant._id} mt="5px" mb={5} bgColor="pink.300">
                  <Text textStyle="AdminNav">{plant.company}</Text>
                </Box>
              ))}
            </Box>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Categories;
