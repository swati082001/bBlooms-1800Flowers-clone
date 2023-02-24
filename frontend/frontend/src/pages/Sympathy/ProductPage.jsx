import React from "react";
import {Button,grid,Menu,MenuButton,MenuItem,MenuList,Text,WrapItem,} from "@chakra-ui/react";
import { ArrowRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Sympathy= () => {
  return (
    <>
      <div
        style={{
          gap: "30px",
          display: "flex",
          marginTop: "30px",
        //  border: "1px solid blue",
        }}
      >
        <div style={{ marginLeft: "10px" }}>
          <Text
            style={{ fontSize: "24px", color: "#65388B", marginTop: "10px" ,width:"320px"}}
            textStyle="Carthead"
          >
            Sympathy & Memorial Plants
          </Text>
        </div>
        {/* <p style={{fontSize:"50px"}}>|</p> */}
        <div style={{ borderLeft: "1px solid #757575" }}>
          <p
            style={{
              textAlign: "left",
              fontSize: "16px",
              height: "70px",
              width: "980px",
              paddingLeft: "30px",
              // border:"1px solid red"
            }}
          >
           Express yourself perfectly during times of sorrow with an elegant, living sympathy plant. As opposed to flowers, plants will continue to serve as a tribute to a life well-lived long after the funeral service is over. If you need assistance, please contact our Specialty Sympathy Advisors toll free at 1-866-538-2259. 
           <u style={{marginLeft:"10px",color:"#65388B"}}>   Read more</u>
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
        Home <ArrowRightIcon boxSize={2} /> Sympathy{" "}
        <ArrowRightIcon boxSize={2} /> Sympathy & Memorial Plants
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
              height: "430px",
              width: "270px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            <div style={{marginLeft:"15px"}}>
            <Text as="b">SHOP PLANT TYPES</Text>
            
            <u><p>All Plants</p></u>
            <u><p>Best Selling Plants</p></u>
            <u><p>Same Day Plant Delivery</p></u>
            <u><p>Cacti,Terrariums $& Succulents</p></u>
            <u><p>Dish Gardens</p></u>
            <u><p>Bonsai trees</p></u>
            <u><p>Bamboo plants</p></u>
            <u><p>Funeral plants</p></u>
            <u><p>Get well plants</p></u>
            <u><p>Green Plants</p></u>
           <u><p>House Plants</p></u> 
           <u> <p>Celebration trees</p></u>
           <u><p>Outdoor plants</p></u> 
           <u><p>Plant Sale</p></u> 
           <u><p>Fair Trade Plant</p></u> 
           </div>
          </div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "220px",
              width: "270px",
              marginTop: "20px",
              
            }}
          >
             <div style={{cursor:"pointer",marginLeft:"15px",textAlign:"left",marginTop:"15px"}}>
             <Text as="b">SHOP FLOWERING PLANTS</Text>
            <u><p>All Flowering Plants</p></u>
            <u><p>Azalea Plants</p></u>
            <u><p>Hydrangea plants</p></u>
            <u><p>Rose Plants</p></u>
            <u><p>Gardenia Plants</p></u>
            <u><p>Chrysanthemum </p></u>
           
          </div>
          </div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "150px",
              width: "270px",
              marginTop: "20px",
            }}
          >
            <div style={{cursor:"pointer",marginLeft:"15px",textAlign:"left",marginTop:"15px"}}>
             <Text as="b">SHOP SEASONAL PLANTS</Text>
            <u><p>Christmas Plants - Coming</p></u>
            <u><p>December</p></u>
            <u><p>Poinsettias - Coming December</p></u>
            <u><p>Flower Bulbs - Coming February</p></u>
           
            </div>
            
            
          </div>
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "300px",
              width: "270px",
              marginTop: "20px",
              
            }}
          >
             <div style={{cursor:"pointer",marginLeft:"15px",textAlign:"left",marginTop:"15px"}}>
             <Text as="b">RELATED CONTENT</Text>
            <u><p>Sympathy Flowers & Gifts</p></u>
            <u><p>Condolence & Bereavement</p></u>
            <u><p>Flowers</p></u>
            <u><p>Same day Sympathy flowers</p></u>
            <u><p>Sympathy Gift Baskets</p></u>
            <u><p>Sympathy Flower Baskets</p></u>
            <u><p>Remembarance Gifts</p></u>
            <u><p>Faith-Inspired Gifts</p></u>
            <u><p>Pet Sympathy </p></u>
            {/* <u><p></p></u>
            <u><p></p></u>
            <u><p></p></u>
            <u><p></p></u>
            <u><p></p></u> */}
           
          </div>
          </div>
          
          <div
            style={{
              border: "1px solid  #636363",
              marginLeft: "12px",
              height: "640px",
              width: "270px",
              marginTop: "20px",
            }}
          >
            <img
              style={{ width:"100%"}}
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
              display:grid,
             
            }}
          >
            <div>

            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default Sympathy;
