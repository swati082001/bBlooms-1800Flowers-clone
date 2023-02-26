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
import AdminList from "./sidebarComponent/AdminList";
import Dashboard from "./sidebarComponent/Dashboard";
import ProductCharts from "./sidebarComponent/ProductCharts";
import LocationPage from "./sidebarComponent/LocationPage";
import UsersPage from "./sidebarComponent/UsersPage";
import Categories from "./sidebarComponent/Categories";
import Shops from "./sidebarComponent/Shops";

const Admin = () => {
  let [dashboard, setDashboard] = useState(true);
  let [adminList, setAdminList] = useState(false);
  let [products, setProducts] = useState(false);
  let [location, setLocation] = useState(false);
  let [users, setUsers] = useState(false);
  let [category, setCategory] = useState(false);
  let [shops, setShops] = useState(false);

  let handleDashboard = () => {
    setDashboard(true);
    setAdminList(false);
    setProducts(false);
    setLocation(false);
    setUsers(false);
    setCategory(false);
    setShops(false);
  };
  let handleAdminList = () => {
    setDashboard(false);
    setAdminList(true);
    setProducts(false);
    setLocation(false);
    setUsers(false);
    setCategory(false);
    setShops(false);
  };

  let handleProducts = () => {
    setDashboard(false);
    setAdminList(false);
    setProducts(true);
    setLocation(false);
    setUsers(false);
    setCategory(false);
    setShops(false);
  };

  let handleLocation = () => {
    setDashboard(false);
    setAdminList(false);
    setProducts(false);
    setLocation(true);
    setUsers(false);
    setCategory(false);
    setShops(false);
  };

  let handleUserList = () => {
    setDashboard(false);
    setAdminList(false);
    setProducts(false);
    setLocation(false);
    setUsers(true);
    setCategory(false);
    setShops(false);
  };
  let handleCategory = () => {
    setDashboard(false);
    setAdminList(false);
    setProducts(false);
    setLocation(false);
    setUsers(false);
    setCategory(true);
    setShops(false);
  };

  let handleShops = () => {
    setDashboard(false);
    setAdminList(false);
    setProducts(false);
    setLocation(false);
    setUsers(false);
    setCategory(false);
    setShops(true);
  };

  return (
    <div>
      <AdminNavbar />
      <div className={styles.mobileSidebar}>
        <Box mt={4} h="550px" bgColor={"purple.400"}>
          <VStack spacing={11} align="stretch" bgColor={"purple.400"}>
            <Button
              color="white"
              width="100%"
              bgColor="purple.400"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleDashboard}
            >
              <AiOutlineDashboard />
            </Button>
            <Button
              color="white"
              width="100%"
              bgColor="purple.400"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleProducts}
            >
              <RiProductHuntLine />
            </Button>
            <Button
              color="white"
              width="100%"
              bgColor="purple.400"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleShops}
            >
              <BsShop />
            </Button>
            <Button
              color="white"
              width="100%"
              bgColor="purple.400"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleCategory}
            >
              <MdOutlineCategory />
            </Button>
            <Button
              color="white"
              width="100%"
              bgColor="purple.400"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleLocation}
            >
              <GoLocation />
            </Button>
            <Button
              color="white"
              width="100%"
              bgColor="purple.400"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleUserList}
            >
              <FiUsers />
            </Button>
            <Button
              color="white"
              width="100%"
              bgColor="purple.400"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleAdminList}
            >
              <RiAdminLine />
            </Button>
          </VStack>
        </Box>
      </div>
      <div className={styles.sidebar}>
        <Box mt={4} h="570px" bgColor={"purple.400"}>
          <VStack
            spacing={12}
            align="stretch"
            bgColor={"purple.400"}
            pt={5}
            pb={5}
          >
            <Button
              leftIcon={<AiOutlineDashboard />}
              fontFamily="Cambria"
              color="white"
              width="100%"
              bgColor="purple.400"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleDashboard}
            >
              Dashboard
            </Button>
            <Button
              leftIcon={<RiProductHuntLine />}
              fontFamily="Cambria"
              bgColor="purple.400"
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
              bgColor="purple.400"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleShops}
            >
              Shops
            </Button>
            <Button
              leftIcon={<MdOutlineCategory />}
              fontFamily="Cambria"
              bgColor="purple.400"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleCategory}
            >
              Categories
            </Button>
            <Button
              leftIcon={<GoLocation />}
              fontFamily="Cambria"
              bgColor="purple.400"
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
              bgColor="purple.400"
              color="white"
              width="100%"
              _hover={{ bgColor: "white", color: "black" }}
              onClick={handleUserList}
            >
              Users List
            </Button>
            <Button
              leftIcon={<RiAdminLine />}
              fontFamily="Cambria"
              bgColor="purple.400"
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
      {users && <UsersPage />}
      {category && <Categories />}
      {shops && <Shops />}
    </div>
  );
};

export default Admin;
