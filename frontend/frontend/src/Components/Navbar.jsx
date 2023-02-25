import { Box, Input, Button, Image, Text, Link } from "@chakra-ui/react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react';
import {ChevronDownIcon} from "@chakra-ui/icons";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from ".././assets/logo.png"

export const Navbar = () => {

    const location = useLocation();
    const [showMenu,setShowMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null ;

    useEffect(()=>{
        if(showMenu === false){

            setShowMenu(true);
            setShowLogin(false);
        }
    },[location])

    function hideMenu(){
        if(showMenu === true ){
            setShowMenu(false);
            setShowLogin(true);
            localStorage.removeItem("currentUser")
        }
    }
    const r = useRef();
    function show(n) {

        if (n === 0) {

            document.getElementById("birthday").style.display = "flex";
            document.getElementById("birthday").style.borderBottom = "5px solid purple";
            document.getElementById("bday").style.borderBottom = "5px solid purple";

        } else if (n === 1) {
            // console.log("hello")
            document.getElementById("smpthy").style.borderBottom = "5px solid purple";
            document.getElementById("sympathy").style.borderBottom = "5px solid purple";
            document.getElementById("sympathy").style.display = "flex";
        } else if (n === 2) {

            document.getElementById("occ").style.borderBottom = "5px solid purple";
            document.getElementById("occasions").style.borderBottom = "5px solid purple";
            document.getElementById("occasions").style.display = "flex";

        }


    }

    function hide(n) {

        if (n === 0) {

            document.getElementById("birthday").style.display = "none";
            document.getElementById("bday").style.borderBottom = "0px";
        } else if (n === 1) {
            document.getElementById("sympathy").style.display = "none";
            document.getElementById("smpthy").style.borderBottom = "0px";
        } else if (n === 2) {
            document.getElementById("occ").style.borderBottom = "0px";
            document.getElementById("occasions").style.display = "none";
        }
        // document.getElementById("birthday").style.display = "none";
    }

    return <Box w="100%" zIndex="2" position="fixed" h="auto"    >

        <Box bg="white" w="100%"  >

            <Box h="50%" display="flex" justifyContent="space-around" alignItems="center" >

                <Link href="/" w="150px" >

                    <Image w="100%" h="60px" src={Logo} alt="website_logo" />
                </Link>

                <Box display="flex" w='auto'>
                    <Input w="500px" type="text" placeholder="Enter Keyword or Product Number" />
                    <Button bg="purple.500" >Search</Button>
                </Box>

                { showLogin && <Box>
                    <Popover border="5px solid black" >
                        <PopoverTrigger>
                            <Button bg="gray.400" >Login/Register</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader >
                                <Link href="/login" ><Button bg="purple.500" w="200px" >Login</Button></Link>
                            </PopoverHeader>
                            <PopoverBody >
                                New Here? Don't have an Account? <br />
                                <Link href="/register" > <b>Click Here</b> </Link> <br />

                                <Box align="left" mt="20px" >
                                    <Link fontSize="xs" >Your Acount</Link> <br />
                                    <Link fontSize="xs" >Track your Orders</Link>  <br />
                                    <Link fontSize="xs" >Join Celebrations Passport</Link> <br />
                                </Box>

                                <Box align="left" border="3px solid black" borderRadius="5px" mt="10px"  >
                                    <Text fontWeight="bold" >Benefits of Registration</Text>
                                    <ul style={{ marginLeft: "20px" }} >
                                        <li>Fast, Secure checkout</li>
                                        <li>Exclusive promotions & Offers</li>
                                    </ul>
                                </Box>

                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Box>}


                {/* <Button bg="purple.500" >My Order</Button> */}
                { showMenu && currentUser &&  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Hi, { currentUser.name }
                    </MenuButton>
                    <MenuList>
                        <MenuItem>My Profile</MenuItem>
                        <MenuItem>My Orders</MenuItem>
                        <MenuItem>My Coupons</MenuItem>
                        <MenuItem onClick={hideMenu} >LogOut</MenuItem>
                    </MenuList>
                </Menu>}

                <Box display="flex" gap="5px" >

                    <Button bg="purple.500" >Cart</Button> <Box border="2px solid black" w="40px" ><Text mt="5px" >{0}</Text></Box>
                </Box>
            </Box>

            <Box border="1px solid black" fontSize="lg" p="10px" display="flex" justifyContent="space-around"  >
                <Text onMouseOver={() => show(0)} onMouseLeave={() => hide(0)} id="bday" >BirthDay </Text>
                <Text onMouseOver={() => show(1)} onMouseLeave={() => hide(1)} id="smpthy" >Sympathy</Text>
                <Text onMouseOver={() => show(2)} onMouseLeave={() => hide(2)} id="occ" >Occasions</Text>
                <Text>Flowers</Text>
                <Text>Plants</Text>
                <Text>Gift Basket & Foods</Text>
                <Text>Gifts & More</Text>
                <Text>Same Day Delivery</Text>
                <Text>Sale</Text>
                <Text>Community</Text>

            </Box>


        </Box>

        <Box p="50px" mt="-10px" id="birthday" lineHeight="30px" ref={r} bg="white" h="auto" display="none" gap="120px" justifyContent="center" onMouseOver={() => show(0)} onMouseLeave={() => hide(0)}  >



            <Box align="left"  >

                <ul type="none" >
                    <Text fontWeight="bold" >BirthDay</Text>
                    <li> <Link> All Birthday Gifts</Link></li>
                    <li> <Link> BirthDay Best Sellers</Link></li>
                    <li> <Link> Birthday Gift Guide</Link></li>
                    <li> <Link> Flower Subscription</Link></li>
                    <li> <Link> Same Day Delivery</Link></li>
                </ul>
            </Box>

            <Box align="left" >

                <ul type="none" >
                    <Text fontWeight="bold" >Shop By Gourmet Food</Text>
                    <li> <Link> Birthday Cakes</Link></li>
                    <li> <Link> Chocolete Covered Strawberries</Link></li>
                    <li> <Link> Chocolate Gifts</Link></li>
                    <li> <Link> Fruit Bouquet</Link></li>
                    <li> <Link> Gift Baskets</Link></li>
                    <li> <Link> Sweet & Spicy</Link></li>
                </ul>
            </Box>

            <Box align="left" >

                <ul type="none" >
                    <Text fontWeight="bold" >Gifts and More</Text>
                    <li> <Link> All keepsake Gifts</Link></li>
                    <li> <Link> Gift Sets</Link></li>
                    <li> <Link> Jwellery</Link></li>
                    <li> <Link> Personalized Gifts</Link></li>
                    <li> <Link> Spa & Aromatherapy</Link></li>

                </ul>
            </Box>

            <Box align="left" >

                <ul type="none" >
                    <Text fontWeight="bold" >Shop By Recipient</Text>
                    <li> <Link> Gifts for Mom</Link></li>
                    <li> <Link> Gifts for Her</Link></li>
                    <li> <Link> Gifts for Kids</Link></li>
                    <li> <Link> Gifts for Him</Link></li>
                    <li> <Link> Gifts for Friend</Link></li>
                    <li> <Link> Gifts for Wife</Link></li>
                </ul>
            </Box>

            <Box>
                <Link w="400px" h="300px" >
                    <Image w="100%" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}" alt="birthday Image" />
                    Birthday Flower Subscription {">"}
                </Link>
            </Box>

        </Box>

        <Box p="50px" mt="-10px" id="sympathy" lineHeight="30px" bg="white" h="auto" display="none" gap="100px" justifyContent="center" onMouseOver={() => show(1)} onMouseLeave={() => hide(1)}  >



            <Box align="left"  >

                <ul type="none" >
                    <Text fontWeight="bold" >Shop By Products</Text>
                    <li> <Link> Flowers</Link></li>
                    <li> <Link> Plants</Link></li>
                    <li> <Link> Rememberance Gift</Link></li>
                    <li> <Link> Faith-Inspired gifts</Link></li>
                    <li> <Link> Personalized Gifts</Link></li>
                </ul>
            </Box>

            <Box align="left" >

                <ul type="none" >
                    <Text fontWeight="bold" >Shop By Location</Text>
                    <li> <Link> Creamtion Flowers</Link></li>
                    <li> <Link> Funeral Flower for Service</Link></li>
                    <li> <Link> Sympathy For Home & Office</Link></li>
                    <li> <Link> Same Day Delivery</Link></li>
                    <li> <Link> Flower Baskets</Link></li>
                </ul>
            </Box>

            <Box align="left" >

                <ul type="none" >
                    <Text fontWeight="bold" >Cremation</Text>
                    <li> <Link> For Cremation Services</Link></li>
                    <li> <Link> Flowers & Gifts for Home </Link></li>
                    <li> <Link> Memorial Garden</Link></li>
                    <li> <Link> Keepsakes & Personalized Gifts</Link></li>

                </ul>
            </Box>

            <Box align="left" >

                <ul type="none" >
                    <Text fontWeight="bold" >Resources</Text>
                    <li> <Link> Etiquettes & Advice</Link></li>
                    <li> <Link> Floral Heart Project</Link></li>
                    <li> <Link> FB Series: Light After Loss</Link></li>

                </ul>
            </Box>

            <Box  >
                <Link  >
                    <Image w="70%" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta1372fb9dc484c24/62452545b55a330eea751d7c/sympathy-gift-baskets-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}" alt="sympathy Image" />

                </Link>
            </Box>

        </Box>

        <Box p="50px" mt="-10px" id="occasions" lineHeight="30px" bg="white" h="auto" display="none" gap="100px" justifyContent="center" onMouseOver={() => show(2)} onMouseLeave={() => hide(2)}  >



            <Box align="left"  >

                <ul type="none" >
                    <Text fontWeight="bold" >Everyday Occasions</Text>
                    <li> <Link> Anniversary</Link></li>
                    <li> <Link> Birthday</Link></li>
                    <li> <Link> Corporate Gifting</Link></li>
                    <li> <Link> Congratulations</Link></li>
                    <li> <Link> Get Well</Link></li>
                    <li> <Link> House Warming</Link></li>
                    <li> <Link> I'm Sorry</Link></li>
                    <li> <Link> Just Because</Link></li>
                    <li> <Link> New Baby</Link></li>
                    <li> <Link> Lover & Romance</Link></li>
                    <li> <Link> Retirement</Link></li>
                    <li> <Link> Sympathty</Link></li>
                    <li> <Link> ThankYou</Link></li>
                    <li> <Link> Thinking of You</Link></li>
                    <li> <Link>Wedding</Link> </li>
                </ul>
            </Box>

            <Box align="left" >

                <ul type="none" >
                    <Text fontWeight="bold" >Seasonal Occasions</Text>
                    <li> <Link> Purim(3/6 - 3/7)</Link></li>
                    <li> <Link> International Women's Day(3/8)</Link></li>
                    <li> <Link> St. Patricks Day(3/17)</Link></li>

                </ul>

                <ul type="none" >
                    <Text fontWeight="bold" >Shop Our Sister Brands</Text>
                    <li> <Link> Cheryl's Cookies</Link></li>
                    <li> <Link> Fruit Bouquets</Link></li>
                    <li> <Link> Harry & David</Link></li>
                    <li> <Link>Personalization Mall</Link> </li>
                    <li> <Link> Shari's Berries </Link> </li>
                    <li> <Link>Popcorn Factory</Link> </li>
                    <li> <Link> Vital Choice Seafood </Link> </li>
                    <li> <Link> Wolferman's Bakery </Link> </li>

                </ul>

            </Box>

            <Box display="flex" >
                <Link w="400px" h="300px" >
                    <Image w="100%" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5ac72c955f462b3f/624525fe0909bc0eb039fd94/birthday-flowers-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}" alt="sympathy Image" />
                    Birthday {">"}
                </Link>
                <Link w="400px" h="300px" >
                    <Image w="100%" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte89107a1233a275a/62bdf751f574014f6a20beca/sympathy-flowers-global-nav-banner-580x400.jpg?quality=70&auto=webp&optimize={medium}" alt="sympathy Image" />
                    Sympathy {">"}
                </Link>
            </Box>

        </Box>

    </Box>


}