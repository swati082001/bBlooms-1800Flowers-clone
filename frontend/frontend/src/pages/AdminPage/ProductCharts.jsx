import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
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
const ProductCharts = () => {
  let data = [
    {
      name: "Birthday Cakes",
      count: 20,
      color: "blue",
    },
    {
      name: "Sympathy Plants",
      count: 25,
      color: "green",
    },
    {
      name: "Anniversary Flowers",
      count: 10,
      color: "red",
    },
  ];
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

        {/* Flowers */}

        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Birthday Cakes</Text>
          </Box>
          <LineChart
            width={1000}
            height={400}
            data={data}
            margin={{ top: 1, right: 1, left: 1, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="30 30" />
            <XAxis dataKey="id" />
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

        {/* Chocolates */}
        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Sympathy Plants</Text>
          </Box>
          <LineChart
            width={1200}
            height={600}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="45 45" />
            <XAxis dataKey="id" />
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

        {/* Cakses */}
        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Anniversary Flowers</Text>
          </Box>
          <LineChart
            width={1200}
            height={500}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="50 50" />
            <XAxis dataKey="id" />
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
