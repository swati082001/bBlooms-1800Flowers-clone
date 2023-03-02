import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { getFlower } from "../../../Redux/AdminRedux/Products/AnniversaryFlowers/AnniversaryFlowers.action";
import { getCake } from "../../../Redux/AdminRedux/Products/BirthDayCakes/BirthDayCakes.action";
import { getPlant } from "../../../Redux/AdminRedux/Products/SympathyPlants/SympathyPlants.action";
const ProductCharts = () => {
  let dispatch = useDispatch();
  let { flowers } = useSelector((store) => store.flowerManager);
  let { cakes } = useSelector((store) => store.cakeManager);
  let { plants } = useSelector((store) => store.plantManager);

  let data = [
    {
      name: "Birthday Cakes",
      count: cakes.length,
      color: "blue",
    },
    {
      name: "Sympathy Plants",
      count: plants.length,
      color: "green",
    },
    {
      name: "Anniversary Flowers",
      count: flowers.length,
      color: "red",
    },
  ];

  useEffect(() => {
    dispatch(getFlower());
    dispatch(getCake());
    dispatch(getPlant());
  }, []);

  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="auto" p={10} bgColor="#f7f7f7 ">
        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Heading color={"#65388b"} size={"md"}>
            Products Charts
          </Heading>
        </Box>

        <Box w="50%" margin="auto" p={5}>
          <BarChart
            width={500}
            // width={{ base: "200px", md: "300px", lg: "400px" }}
            // height={{ base: 300, md: 400, lg: 500 }}
            height={500}
            data={data}
            margin={{ top: 1, right: 1, left: 1, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="teal" />
          </BarChart>
        </Box>

        {/* Cakes */}

        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Birthday Cakes</Text>
          </Box>
          <LineChart
            width={1000}
            height={400}
            data={cakes}
            margin={{ top: 1, right: 1, left: 1, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="30 30" />
            <XAxis dataKey="price" />
            <YAxis type="number" domain={[0, 400]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2e3192"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Box>

        {/* Plants */}
        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Sympathy Plants</Text>
          </Box>
          <LineChart
            width={1200}
            height={600}
            data={plants}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="45 45" />
            <XAxis dataKey="price" />
            <YAxis type="number" domain={[1000, 60000]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2e3192"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Box>

        {/* Flowers*/}
        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Anniversary Flowers</Text>
          </Box>
          <LineChart
            width={1200}
            height={500}
            data={flowers}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="50 50" />
            <XAxis dataKey="price" />
            <YAxis type="string" domain={[0, 1000]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Box>
      </Box>
    </div>
  );
};

export default ProductCharts;
