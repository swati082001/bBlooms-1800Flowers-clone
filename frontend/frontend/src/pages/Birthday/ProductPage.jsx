import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { ArrowRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Birthday = () => {
  return (
    <>
      <div
        style={{
          gap: "30px",
          display: "flex",
          marginTop: "30px",
        //   border: "1px solid black",
        }}
      >
        <div style={{ marginLeft: "10px" }}>
          <Text
            style={{ fontSize: "26px", color: "#65388B", marginTop: "10px" }}
            textStyle="Carthead"
          >
            Birthday Flowers
          </Text>
        </div>
        {/* <p style={{fontSize:"50px"}}>|</p> */}
        <div style={{ borderLeft: "1px solid #757575" }}>
          <p
            style={{
              textAlign: "left",
              fontSize: "14px",
              height: "70px",
              width: "1100px",
              paddingLeft: "30px",
            }}
          >
            Our birthday flowers include fresh roses, daisies, and more! Whether
            your birthday flower delivery is sent to home or office, you can be
            sure it will be received with a smile. Need your birthday flowers
            today? Same-day birthday delivery is available! With same-day flower
            delivery on orders placed by 2PM, no one has to know whether you
            ordered weeks ago or this morning. You can be sure our flowers for
            birthdays will send the right message.
          </p>
        </div>
      </div>

      <p
        style={{
          marginLeft: "10px",
          textAlign: "left",
          fontSize: "14px",
          color: "#65388B",
          marginTop: "10px",
          cursor:"pointer"
        }}
      >
        Home <ArrowRightIcon boxSize={2} /> Birthday{" "}
        <ArrowRightIcon boxSize={2} /> Birthday flowers
      </p>
      <div style={{ display: "flex", gap: "25px" }}>
        <div style={{ 
            // border: "1px solid teal",
             width: "280px" }}>
          <div
            style={{
              marginLeft: "10px",
            //   border: "1px solid red",
              height: "280px",
              width: "270px",
              backgroundColor: "#65388B",
              marginTop: "10px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ color: "white", paddingTop: "15px" }}>
              FIND AVAILABLE PRODUCTS!
            </h3>
            <p
              style={{
                marginLeft: "8px",
                fontSize: "11px",
                color: "white",
                padding: "15px",
                textAlign: "left",
              }}
            >
              ENTER DELIVERY ZIP CODE OR ADDRESS*
            </p>
            <input
              style={{
                height: "45px",
                width: "215px",
                borderRadius: "4px",
                // margin: "-15px",
              
                marginTop:"-10px"
              }}
              type="text"
              placeholder="Enter a location"
            />
            <p
              style={{
                marginLeft: "8px",
                fontSize: "11px",
                color: "white",
                padding: "15px",
                textAlign: "left",
              }}
            >
              LOCATION TYPE:
            </p>
            <Menu>
              <MenuButton
                style={{ height: "45px", width: "220px", textAlign: "left",marginTop:"-10px" }}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Residence
              </MenuButton>
              <MenuList>
                <MenuItem>Residence</MenuItem>
                <MenuItem>Business</MenuItem>
                <MenuItem>Funeral home</MenuItem>
                <MenuItem>Hospital</MenuItem>
                <MenuItem>Apartment</MenuItem>
                <MenuItem>School</MenuItem>
                <MenuItem>Church</MenuItem>
              </MenuList>
            </Menu>
            <WrapItem>
              <Button
                style={{
                  height: "45px",
                  width: "221px",
                  marginLeft: "25px",
                  marginTop: "10px",
                }}
                colorScheme="whatsapp"
              >
                GO
              </Button>
            </WrapItem>
          </div>
          <div
            style={{
              textAlign: "left",
              paddingTop: "20px",
              border: "1px solid #636363",
              marginLeft: "12px",
              height: "400px",
              width: "270px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            <div style={{marginLeft:"15px"}}>
            <Text as="b">BIRTHDAY FLOWERS AND GIFTS</Text>
            
            <u>
              <p>All Birthday Gifts and</p>
            </u>
            <u>
              <p>Arrangements</p>
            </u>
            <u>
              <p>Same Day Birthday Delivery</p>
            </u>
            <u><p>Birthday Cake Delivery</p></u>
            <u><p>Birthday Gift Baskets</p></u>
            <u><p>Birthday Plans</p></u>
            <u><p>Birthday Roses</p></u>
            <u><p>Best Selling Birthday Gifts</p></u>
            <u><p>Feliz Cumpleanos Flores</p></u>
            <u><p>Flower Birthday Cakes</p></u>
           <u><p>Unique Birthday Gifts</p></u> 
           <u> <p>Multi-Day Birthday Gifting</p></u>
           <u><p>Birthday Gift Guide</p></u> 
           </div>
          </div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "300px",
              width: "270px",
              marginTop: "10px",
            }}
          ></div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "200px",
              width: "270px",
              marginTop: "10px",
            }}
          ></div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "600px",
              width: "270px",
              marginTop: "10px",
            }}
          >
            <img
              style={{ marginLeft: "15px" }}
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbd8e878899d3f1bd/5d52d450696dde105b7d59dd/smile_guarantee.jpg"
              alt="pic"
            />
          </div>
        </div>

        <div>
          <div
            style={{
             border: "1px solid red",
              height: "8000px",
              width: "1030px",
              backgroundColor: "#FFFFFF",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Birthday;
