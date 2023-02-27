import { Box, Heading, Text, Image,  Input,  Link } from "@chakra-ui/react";
//import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react'

import { useState,useRef } from "react";

import { useNavigate } from "react-router-dom";
// import { GiSchoolBag, GiSuitcase } from "react-icons/gi";
import { useToast } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import styles from "../../Styles/Login.module.css";





let initialState = {
    name: "",
    email: "",
    password: "",
    city: "",
}


export const Login = () => {

    const navigate = useNavigate();
    const toast = useToast();
    const toast2 = useToast();
    const [showSpinner, setShowSpinner] = useState(false);
    
    const [form, setForm] = useState(initialState);
    const [togglePass,setTogglePass] = useState("Show")
    const [passType,setPassType] = useState("password")
    const userRef = useRef();
    const adminRef = useRef();
    const [identity,setIdentity] = useState("users");

    function togglePassVisibility(){
        togglePass === "Show" ? setTogglePass("Hide") : setTogglePass("Show");
        passType === "password"? setPassType("text") : setPassType("password")
    }

    function switchToAdmin(){

        adminRef.current.style.background = "white";
        adminRef.current.style.color = "black";
        userRef.current.style.background = "none";
        userRef.current.style.color = "white";
        setIdentity("adminusers")

    }
    function switchToUser(){

        adminRef.current.style.background = "none";
        adminRef.current.style.color = "white";
        userRef.current.style.background = "white";
        userRef.current.style.color = "black";
        setIdentity("users")
    }

    function getInput(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    console.log(form)

    async function login(id) {

        console.log(form, "user details");

        try {
            let res = await fetch(`https://weary-red-oyster.cyclic.app/${id}/login`, {
                method: "POST",
                body: JSON.stringify(form),
                headers: { "Content-Type": "Application/json" }
            });
            let data = await res.json();
            localStorage.setItem("currentUser", data.currentUser !== undefined ? JSON.stringify(data.currentUser) : JSON.stringify(data));
            localStorage.setItem("bbloomstoken",data.token)
            if (data.token) {
                //  alert("login successful")
                toast({
                    position: "top",
                    title: 'Loading...',
                    description: "Please wait while we fetch your details.",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                setShowSpinner(true);
                setTimeout(() => {
                    setShowSpinner(false);
                     id === "adminusers" ?  navigate("/admin") : navigate("/")
                }, 5000);
                // console.log(data,"data/response")
            }else if(data.msg === "Something went Wrong"){
                toast2({
                    position: "top",
                    render: () => (
                        <Box borderRadius="5px" color='white' p={3} bg='red.600'>
                          <Text>Wrong Crendentials</Text>
                          <Text>Check Email or Password</Text>
                        </Box>
                      ),
                    duration: 4000,
                    // isClosable: true,
                })
                setShowSpinner(true);
                setTimeout(() => {
                    setShowSpinner(false);
                    
                }, 5000);
                localStorage.removeItem("currentUser")
            }
        } catch (err) {
            console.log(err)
        }
    }




    return <Box h="100vh" zIndex="0" display="flex" alignItems="center" justifyContent="space-around" border=" 1px solid black" background="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/LoginImg.jpg')" >

        <Box id={styles.leftBox} w="30%" h='90%' zIndex="1" bg="white" opacity="0.8" borderRadius="10px" border=" 1px solid black" align="center"   >
            <Image w="50%" display="block" margin="auto" mt="20px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=60&auto=webp&optimize={medium}" alt="1800 flowers" />

            <Text fontWeight="bold" color="gray" fontSize="lg" noOfLines={2} w="300px" mt="170px" >Create an account for faster checkout and order tracking</Text>

            <Text fontWeight="bold" color="gray" fontSize="lg" noOfLines={2} w="300px" mt="170px" >One Account,12 Brands</Text>
            <Heading>CELEBRATIONS</Heading>
            <Heading>FAMILY OF BRANDS</Heading>
        </Box>

        <Box id={styles.loginBox} w="30%" h='auto' p=" 10px" lineHeight="10px" zIndex="1" borderRadius="10px" border=" 5px solid white" >
            {/* <Box  > */}


            <Box mt=" 30px" >

                <Heading color="white" w="95%" > Login</Heading>

                <Box id={styles.switchUserBox} display="flex" color="white"  w="300px" margin="auto" mt="30px" h="30px" alignItems="center" fontSize="20px" >

                    <Box id={styles.user} _hover={{cursor:"pointer"}} onClick={switchToUser} ref={userRef} bg="white" color="black" transition="background 1s" border="1px solid white" w="250px" h="30px" display="flex" alignItems="center" justifyContent="center" >

                        <Text   >User</Text>
                    </Box>
                    <Box id={styles.admin} _hover={{cursor:"pointer"}} onClick={switchToAdmin} ref={adminRef} bg="none" transition="background 1s" w="250px" border="1px solid white" h="30px" display="flex" alignItems="center" justifyContent="center"  >

                        <Text    >Admin</Text>
                    </Box>
                </Box>

                <FormControl align="left" w="65%" m="auto" mt="50px" mb="50px" >


                    <FormLabel mt="20px" color="white" fontWeight="bold" >Email Id</FormLabel>
                    <Input bg="white" type='email' placeholder="suneet@gmail.com" id={"field-:r4"} name="email" value={form.email} onChange={(e) => getInput(e)} />


                    <FormLabel color="white" mt="20px" fontWeight="bold" >Password</FormLabel>
                    <Input bg="white" type={passType} placeholder="password:suneet" id={"field-:r5"} name="password" value={form.password} onChange={(e) => getInput(e)} />
                    <Text  _hover={{cursor:"pointer"}} zIndex="1" w="50px" h="15px" position="relative" bottom="25px" left="230px" onClick={togglePassVisibility} >{togglePass}</Text>
                    <FormHelperText color="white" > <Text fontWeight="bold" align="left">Minimum 6 characters required</Text> </FormHelperText>



                    <Input _hover={{cursor:"pointer"}} mt="20px" type="submit" w="200px" bg="purple.500" value="Login" onClick={()=>login(identity)} />
                    {showSpinner && <Spinner color="white" mb="-5px" ml="-40px" />}


                    <Text bg="white" fontSize="xs" mt="20px" align="left" mb="20px" fontWeight="bold" > By contiuing, you agree to the <Link color="blue.400">Terms and Conditions</Link> & <Link color="blue.400">Privacy Policy</Link> of 1800flowers.com </Text>

                    {/* <Button w="250px" bg="purple.500" align="left">Register</Button> */}


                </FormControl>

                <Box display="flex" justifyContent="center" alignItems="center" >
                    <Box borderTop="2px solid white" w="100px" mr="10px" ></Box>
                    <Text color="white" fontWeight="bold" >Or Sign In with</Text>
                    <Box borderTop="2px solid white" w="100px" ml="10px" ></Box>
                </Box>

                <Box display="flex" mt="50px" justifyContent="center" >

                    <Link>
                        <Box id={styles.facebook} bg="#4469b0" h="50px" w="200px" border="1px solid black" display="flex" alignItems="center" >
                            <Image borderRadius="50%" ml="10px" w="10%" src="https://png.pngitem.com/pimgs/s/20-209894_transparent-round-logo-png-round-facebook-icon-png.png" alt="facebook" />
                            <Text lineHeight="15px">Sign in with facebook</Text>
                        </Box>
                    </Link>

                    <Link>

                        <Box id={styles.google} bg="white" w="200px" h="50px" border="1px solid black" display="flex" alignItems="center" >
                            <Image  ml="10px" w="10%" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="google" />
                            <Text lineHeight="15px"  >Sign in with Google</Text>
                        </Box>
                    </Link>
                </Box>

            </Box>

            {/* </Box> */}
        </Box>
    </Box>
}