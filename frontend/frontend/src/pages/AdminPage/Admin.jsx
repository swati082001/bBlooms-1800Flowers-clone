import { Box, Button, StackDivider, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiAdminLine, RiProductHuntLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { GoLocation } from "react-icons/go";

import styles from "..//..//Styles/Admin.module.css";
import AdminNavbar from "./AdminNavbar";
import AdminList from "./AdminList";
import Dashboard from "./Dashboard";
import ProductCharts from "./ProductCharts";
import LocationPage from "./LocationPage";

const Admin = () => {
  let [dashboard, setDashboard] = useState(true);
  let [adminList, setAdminList] = useState(false);
  let [products, setProducts] = useState(false);
  let [location, setLocation] = useState(false);

  let handleDashboard = () => {
    setDashboard(true);
    setAdminList(false);
    setProducts(false);
  };
  let handleAdminList = () => {
    setDashboard(false);
    setAdminList(true);
    setProducts(false);
    setLocation(false);
  };

  let handleProducts = () => {
    setDashboard(false);
    setAdminList(false);
    setProducts(true);
    setLocation(false);
  };

  let handleLocation = () => {
    setDashboard(false);
    setAdminList(false);
    setProducts(false);
    setLocation(true);
  };

  console.log(adminList);
  return (
    <div>
      <AdminNavbar />
      <div className={styles.mobileSidebar}>
        <Box mt={4} h="550px" bgColor={"#65388b"}>
          <VStack spacing={11} align="stretch">
            <Button
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
            >
              <AiOutlineDashboard />
            </Button>
            <Button
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
            >
              <RiProductHuntLine />
            </Button>
            <Button
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
            >
              <BsShop />
            </Button>
            <Button
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
            >
              <MdOutlineCategory />
            </Button>
            <Button
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
            >
              <GoLocation />
            </Button>
            <Button
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
            >
              <FiUsers />
            </Button>
            <Button
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
            >
              <RiAdminLine />
            </Button>
          </VStack>
        </Box>
      </div>
      <div className={styles.sidebar}>
        <Box mt={4} h="570px" bgColor={"#65388b"}>
          <VStack spacing={12} align="stretch" bgColor={"#65388b"}>
            <Button
              leftIcon={<AiOutlineDashboard />}
              fontFamily="Cambria"
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleDashboard}
            >
              Dashboard
            </Button>
            <Button
              leftIcon={<RiProductHuntLine />}
              fontFamily="Cambria"
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleProducts}
            >
              Products
            </Button>
            <Button
              leftIcon={<BsShop />}
              fontFamily="Cambria"
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
            >
              Shops
            </Button>
            <Button
              leftIcon={<MdOutlineCategory />}
              fontFamily="Cambria"
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
            >
              Categories
            </Button>
            <Button
              leftIcon={<GoLocation />}
              fontFamily="Cambria"
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleLocation}
            >
              Location
            </Button>
            <Button
              leftIcon={<FiUsers />}
              fontFamily="Cambria"
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
            >
              Users List
            </Button>
            <Button
              leftIcon={<RiAdminLine />}
              fontFamily="Cambria"
              bgColor="#65388b"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleAdminList}
            >
              Admin List
            </Button>
          </VStack>
        </Box>
      </div>
      {dashboard && <Dashboard />}
      {adminList && <AdminList />}
      {products && <ProductCharts />}
      {location && <LocationPage />}
    </div>
  );
};

export default Admin;
