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

const Admin = () => {
  let [dashboard, setDashboard] = useState(true);
  let [adminList, setAdminList] = useState(false);
  let handleAdminList = () => {
    setDashboard(false);
    setAdminList(true);
  };
  let handleDashboard = () => {
    setDashboard(true);
    setAdminList(false);
  };
  console.log(adminList);
  return (
    <div>
      <AdminNavbar />
      <div className={styles.mobileSidebar}>
        <Box mt={6} h="700px" color={"white"}>
          <VStack
            divider={<StackDivider borderColor="grey.200" />}
            spacing={10}
            align="stretch"
          >
            <Button
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              <AiOutlineDashboard />
            </Button>
            <Button
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              <RiProductHuntLine />
            </Button>
            <Button
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              <BsShop />
            </Button>
            <Button
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              <MdOutlineCategory />
            </Button>
            <Button
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              <GoLocation />
            </Button>
            <Button
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              <FiUsers />
            </Button>
            <Button
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              <RiAdminLine />
            </Button>
          </VStack>
        </Box>
      </div>
      <div className={styles.sidebar}>
        <Box mt={6} h="700px" color={"white"}>
          <VStack
            divider={<StackDivider borderColor="grey.200" />}
            spacing={10}
            align="stretch"
          >
            <Button
              leftIcon={<AiOutlineDashboard />}
              fontFamily="Cambria"
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
              onClick={handleDashboard}
            >
              Dashboard
            </Button>
            <Button
              leftIcon={<RiProductHuntLine />}
              fontFamily="Cambria"
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              Products
            </Button>
            <Button
              leftIcon={<BsShop />}
              fontFamily="Cambria"
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              Shops
            </Button>
            <Button
              leftIcon={<MdOutlineCategory />}
              fontFamily="Cambria"
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              Categories
            </Button>
            <Button
              leftIcon={<GoLocation />}
              fontFamily="Cambria"
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              Location
            </Button>
            <Button
              leftIcon={<FiUsers />}
              fontFamily="Cambria"
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
            >
              Users List
            </Button>
            <Button
              leftIcon={<RiAdminLine />}
              fontFamily="Cambria"
              bgColor="white"
              color="black"
              width="100%"
              _hover={{ bgColor: "#65388b", color: "white" }}
              onClick={handleAdminList}
            >
              Admin List
            </Button>
          </VStack>
        </Box>
      </div>
      {dashboard && <Dashboard />}
      {adminList && <AdminList />}
    </div>
  );
};

export default Admin;
