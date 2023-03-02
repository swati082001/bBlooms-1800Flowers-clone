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
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import Logo from ".././assets/logo.png"
import {getCart} from "../Redux/CART-REDUX/cart.action"
import { useSelector, useDispatch } from "react-redux";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";


import styles from "../Styles/Navbar.module.css";
//---------------------------Navbar Menu Data------------------------------------------------------------------

const birthday = ["Birthday Cake", "Birthday Flowers", "Birthday Best Sellers", "Same Day Delivery"]
const occasion = ["Birthday", "Sympathy", "Love & Romance", "Get Well"]
const sympathy = ["Sympathy Plants", "All Sympathy", "Same Day Delivery", "Cremation Flowers", "Funeral Flowers for Service", ""];
let listValue;




//---------------------------Navbar starts here------------------------------------------------------------------
export const Navbar = () => {
    let {cart} = useSelector((store) => store.cart);
    // console.log(cart.length);
    const dispatch = useDispatch()

    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(true);


    const [mainList, setMainList] = useState(true);
    const [subList1, setSubList1] = useState(false);
    const [backtoMenu, setBackToMenu] = useState(false);
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    useEffect(() => {
          dispatch(getCart())
        if (currentUser && showMenu === false) {

        if(showMenu === false){

            setShowMenu(true);
            setShowLogin(false);
        }
    }}, [location])


    // console.log(showLogin, "show login")

    function hideMenu() {
        if (showMenu === true) {
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

        } else if (n === 3) {

            document.getElementById("flw").style.borderBottom = "5px solid purple";
            document.getElementById("flowers").style.borderBottom = "5px solid purple";
            document.getElementById("flowers").style.display = "flex";

        } else if (n === 4) {

            document.getElementById("plnt").style.borderBottom = "5px solid purple";
            document.getElementById("plants").style.borderBottom = "5px solid purple";
            document.getElementById("plants").style.display = "flex";

        } else if (n === 5) {

            document.getElementById("gbf").style.borderBottom = "5px solid purple";
            document.getElementById("giftBasket").style.borderBottom = "5px solid purple";
            document.getElementById("giftBasket").style.display = "flex";

        } else if (n === 6) {

            document.getElementById("gif").style.borderBottom = "5px solid purple";
            document.getElementById("gifts").style.borderBottom = "5px solid purple";
            document.getElementById("gifts").style.display = "flex";

        } else if (n === 7) {

            document.getElementById("sdd").style.borderBottom = "5px solid purple";
            document.getElementById("sameDay").style.borderBottom = "5px solid purple";
            document.getElementById("sameDay").style.display = "flex";

        } else if (n === 8) {

            document.getElementById("sle").style.borderBottom = "5px solid purple";
            document.getElementById("sale").style.borderBottom = "5px solid purple";
            document.getElementById("sale").style.display = "flex";

        } else if (n === 9) {

            document.getElementById("comm").style.borderBottom = "5px solid purple";
            document.getElementById("community").style.borderBottom = "5px solid purple";
            document.getElementById("community").style.display = "flex";

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
        else if (n === 3) {
            document.getElementById("flw").style.borderBottom = "0px";
            document.getElementById("flowers").style.display = "none";
        } else if (n === 4) {
            document.getElementById("plnt").style.borderBottom = "0px";
            document.getElementById("plants").style.display = "none";
        } else if (n === 5) {

            document.getElementById("gbf").style.borderBottom = "0px";
            document.getElementById("giftBasket").style.display = "none";

        } else if (n === 6) {


            document.getElementById("gif").style.borderBottom = "0px";
            document.getElementById("gifts").style.display = "none";


        } else if (n === 7) {

                   
      
            document.getElementById("sdd").style.borderBottom = "0px";
            document.getElementById("sameDay").style.display = "none";

        } else if (n === 8) {



            document.getElementById("sle").style.borderBottom = "0px";
            document.getElementById("sale").style.display = "none";

        } else if (n === 9) {

            document.getElementById("comm").style.borderBottom = "0px";
            document.getElementById("community").style.display = "none";

        }
        // document.getElementById("birthday").style.display = "none";
    }

    function showCategory(val) {
        listValue = val;
        console.log(listValue, "list value")
        if (mainList === true) {
            setMainList(false);
            setSubList1(true);
            setBackToMenu(true);
        }
    }
    function toMainMenu() {
        if (mainList === false) {
            setMainList(true);
            setSubList1(false);
            setBackToMenu(false);
        }
    }

    return <Box id={styles.box} width="100vw"  h="auto" zIndex="2" position="fixed"     >

    <Box bg="white" w="100%" id={styles.subContainer} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;" >

        <Box id={styles.firstBox} h="50%" display="flex" justifyContent="space-evenly" alignItems="center" >

            {/* //-------------------side Drawer menu-------------------------------------------------------------------- */}
            <Box id={styles.categoryMenu} border="1px solid black" >

                <Button bg="purple.600" ref={btnRef} colorScheme='teal' onClick={onOpen}>
                    Menu
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>

                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Box id={styles.drawerUserBtns} display="none" justifyContent="space-between" mt="30px" ml="300px" w="300px" border="1px solid black" >


                                {showLogin && <Box>
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
                                {showMenu && currentUser && <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                        Hi, {currentUser.name}
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>My Profile</MenuItem>
                                        <MenuItem>My Orders</MenuItem>
                                        <MenuItem>My Coupons</MenuItem>
                                        <MenuItem onClick={hideMenu} >LogOut</MenuItem>
                                    </MenuList>
                                </Menu>}

                                <Box display="flex" gap="5px" >

                                    <Button bg="purple.500" >Cart</Button> <Box border="2px solid black" w="40px" ><Text mt="5px" >{cart.length}</Text></Box>
                                </Box>
                            </Box>
                            <Box position="relative" top="20px" display="flex" w='auto'  >
                                <Input w="500px" type="text" placeholder="Enter Keyword or Product Number" />
                                <Button bg="purple.500" >Search</Button>
                            </Box>
                        </DrawerHeader>

                        <DrawerBody>
                            {backtoMenu && <Button bg="purple.300" onClick={toMainMenu} > {"<"} Back to Main Menu</Button>}
                            {mainList && <UnorderedList lineHeight="50px" >
                                <ListItem onClick={() => showCategory(birthday)} >Birthday</ListItem>
                                <ListItem onClick={() => showCategory(sympathy)} >Sympathy</ListItem>
                                <ListItem onClick={() => showCategory(occasion)} >Occasion</ListItem>
                                <ListItem>Flowers</ListItem>
                                <ListItem>Plants</ListItem>
                            </UnorderedList>}
                            {subList1 && <UnorderedList lineHeight="50px" >

                                <ListItem>{listValue[0]}</ListItem>
                                <ListItem>{listValue[1]}</ListItem>
                                <ListItem>{listValue[2]}</ListItem>
                                <ListItem>{listValue[3]}</ListItem>
                            </UnorderedList>}

                        </DrawerBody>

                        <DrawerFooter>

                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>

                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box>

            <Link id={styles.logo} href="/" w="auto"     >

                <Image w="100%" h="60px" src={Logo} alt="website_logo" />
            </Link>

            <Box id={styles.search} position="relative" left="100px" display="flex" w='auto' >
                <Input w="500px" type="text" placeholder="Enter Keyword or Product Number" />
                <Button bg="purple.500" >Search</Button>
            </Box>


            <Box id={styles.userBtns} display="flex" justifyContent="space-between" ml="300px" w="300px"  >


                {showLogin && <Box>
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
                {showMenu && currentUser && <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Hi, {currentUser.name}
                    </MenuButton>
                    <MenuList>
                        <MenuItem>My Profile</MenuItem>
                        <MenuItem>My Orders</MenuItem>
                        <MenuItem>My Coupons</MenuItem>
                        <MenuItem onClick={hideMenu} >LogOut</MenuItem>
                    </MenuList>
                </Menu>}

                <Box display="flex" gap="5px" >
                    <Link href="/cart">
                    <Button bg="purple.500" >Cart</Button> 
                    </Link>
                    
                    <Box border="2px solid black" w="40px" ><Text mt="5px" >{cart.length}</Text></Box>
                </Box>
            </Box>
        </Box>

        <Box id={styles.category} borderTop="2px solid black" fontSize="lg" p="10px" display="flex" justifyContent="space-around"  >
            <Text onMouseOver={() => show(0)} onMouseLeave={() => hide(0)} id="bday" >BirthDay </Text>
            <Text onMouseOver={() => show(1)} onMouseLeave={() => hide(1)} id="smpthy" >Sympathy</Text>
            <Text onMouseOver={() => show(2)} onMouseLeave={() => hide(2)} id="occ" >Occasions</Text>
            <Text onMouseOver={() => show(3)} onMouseLeave={() => hide(3)} id="flw" >Flowers</Text>
            <Text onMouseOver={() => show(4)} onMouseLeave={() => hide(4)} id="plnt"  >Plants</Text>
            <Text onMouseOver={() => show(5)} onMouseLeave={() => hide(5)} id="gbf" >Gift Basket & Foods</Text>
            <Text onMouseOver={() => show(6)} onMouseLeave={() => hide(6)} id="gif" >Gifts & More</Text>
            <Text onMouseOver={() => show(7)} onMouseLeave={() => hide(7)} id="sdd" >Same Day Delivery</Text>
            <Text onMouseOver={() => show(8)} onMouseLeave={() => hide(8)} id="sle" >Sale</Text>
            <Text onMouseOver={() => show(9)} onMouseLeave={() => hide(9)} id="comm" >Community</Text>

        </Box>




    </Box>

    <Box p="50px" mt="-10px" id="birthday" lineHeight="30px" ref={r} bg="white" h="auto" display="none" gap="120px" justifyContent="center" onMouseOver={() => show(0)} onMouseLeave={() => hide(0)}  >



        <Box align="left"  >

            <ul type="none" >
                <Text fontWeight="bold" >BirthDay</Text>
                <li> <Link href="/flower" > Birthday Flowers</Link></li>
                <li> <Link> BirthDay Best Sellers</Link></li>
                <li> <Link> Birthday Gift Guide</Link></li>
                <li> <Link> Flower Subscription</Link></li>
                <li> <Link> Same Day Delivery</Link></li>
            </ul>
        </Box>

        <Box align="left" >

            <ul type="none" >
                <Text fontWeight="bold" >Shop By Gourmet Food</Text>
                <li> <Link href="/birthdaycake" > Birthday Cakes</Link></li>
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
                <li> <Link href="/sympathy" > Plants</Link></li>
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

    <Box p="50px" mt="-10px" id="flowers" lineHeight="30px" ref={r} bg="white" h="auto" display="none" gap="120px" justifyContent="center" onMouseOver={() => show(3)} onMouseLeave={() => hide(3)}  >



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

    <Box p="50px" mt="-10px" id="plants" lineHeight="30px" ref={r} bg="white" h="auto" display="none" gap="120px" justifyContent="center" onMouseOver={() => show(4)} onMouseLeave={() => hide(4)}  >



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

    <Box p="50px" mt="-10px" id="giftBasket" lineHeight="30px" ref={r} bg="white" h="auto" display="none" gap="120px" justifyContent="center" onMouseOver={() => show(5)} onMouseLeave={() => hide(5)}  >



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

    <Box p="50px" mt="-10px" id="gifts" lineHeight="30px" ref={r} bg="white" h="auto" display="none" gap="120px" justifyContent="center" onMouseOver={() => show(6)} onMouseLeave={() => hide(6)}  >



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

    <Box p="50px" mt="-10px" id="sameDay" lineHeight="30px" ref={r} bg="white" h="auto" display="none" gap="120px" justifyContent="center" onMouseOver={() => show(7)} onMouseLeave={() => hide(7)}  >



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

    <Box p="50px" mt="-10px" id="sale" lineHeight="30px" ref={r} bg="white" h="auto" display="none" gap="120px" justifyContent="center" onMouseOver={() => show(8)} onMouseLeave={() => hide(8)}  >



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

    <Box p="50px" mt="-10px" id="community" lineHeight="30px" ref={r} bg="white" h="auto" display="none" gap="120px" justifyContent="center" onMouseOver={() => show(9)} onMouseLeave={() => hide(9)}  >



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


</Box>
}