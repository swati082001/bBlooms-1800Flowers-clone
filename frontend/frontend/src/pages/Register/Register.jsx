import { Box, Heading, Text, Image, Input, Link } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react'
import { useState } from "react";
//import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import { GiSchoolBag, GiSuitcase } from "react-icons/gi";
import { useToast } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import styles from "../../Styles/Register.module.css";


let initialState = {
    name:"",
    email:"",
    password:"",
    city:"",
}

export const Register = () => {
    
    // const [input,setInput] = ("");
    const toast = useToast();
    const [showSpinner,setShowSpinner ] = useState(false);

    const [form,setForm] = useState(initialState);
    const navigate = useNavigate();

    const [togglePass,setTogglePass] = useState("Show")
    const [passType,setPassType] = useState("password")

    function togglePassVisibility(){
        togglePass === "Show" ? setTogglePass("Hide") : setTogglePass("Show");
        passType === "password"? setPassType("text") : setPassType("password")
    }

    function getInput(e){
         const {name,value} = e.target;
         setForm({...form,[name]:value});
    }
    // https://itchy-ruby-tweed-jacket.cyclic.app/users/register
    // http://localhost:4500/users/register
    async function addUser(){

        console.log(form,"user details");

        try{
           let res = await fetch(`https://weary-red-oyster.cyclic.app/users/register`,{
            method:"POST",
            body: JSON.stringify(form),
            headers:{"Content-Type":"Application/json"}
           });
           let data = await res.json();
           localStorage.setItem("currentUser",JSON.stringify(data));
           if(data){
             
             toast({
                position: "top",
                title: 'Setting up Account...',
                description: "It may take a while...",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            setShowSpinner(true);
            setTimeout(() => {
                setShowSpinner(false);
                navigate("/")
            }, 5000);
           }
           console.log(data,"data/response")
        }catch(err){
            console.log(err)
        }
    }

    console.log(form)
    return <Box h="100vh" zIndex="0" display="flex" alignItems="center" justifyContent="space-around" border=" 1px solid black" background="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/registerImg.jpg')" bgSize="cover" >

        <Box id={styles.leftBox}  w="30%" h='90%' zIndex="1" bg="white" opacity="0.8" borderRadius="10px"  border=" 1px solid black" align="center"   >
            <Image w="50%" display="block" margin="auto" mt="20px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=60&auto=webp&optimize={medium}" alt="1800 flowers" />

            <Text fontWeight="bold" color="gray" fontSize="lg" noOfLines={2} w="300px" mt="170px" >Create an account for faster checkout and order tracking</Text>

            <Text fontWeight="bold" color="gray" fontSize="lg" noOfLines={2} w="300px" mt="170px" >One Account,12 Brands</Text>
            <Heading>CELEBRATIONS</Heading>
            <Heading>FAMILY OF BRANDS</Heading>
        </Box>

        <Box id={styles.loginBox} w="30%" h='90%' lineHeight="10px"   zIndex="1" borderRadius="10px"  border=" 5px solid white" >
            {/* <Box  > */}


            <Box mt=" 10px" >

                <Heading color="white" > Create Account</Heading>

                <FormControl align="left" w="65%" m="auto" mt="20px" mb="50px" >
                    <FormLabel color="white"fontWeight="bold" >Full Name</FormLabel>
                    <Input bg="white" type='text' placeholder="What is your Name ?" name="name" value={form.name} onChange={(e)=>getInput(e)}  />

                    <FormLabel mt="20px" color="white" fontWeight="bold" >Email Id</FormLabel>
                    <Input bg="white" type='email' placeholder="Tell us your Email Id" id={"field-:r4"} name="email" value={form.email} onChange={(e)=>getInput(e)}  />


                    <FormLabel color="white" mt="20px" fontWeight="bold" >Password</FormLabel>
                    <Input bg="white" type={passType} placeholder="Create a password" id={"field-:r5"} name="password" value={form.password} onChange={(e)=>getInput(e)}  />
                    <Text  _hover={{cursor:"pointer"}} zIndex="1" w="50px" h="15px" position="relative" bottom="25px" left="230px" onClick={togglePassVisibility} >{togglePass}</Text>
                    <FormHelperText color="white" > <Text fontWeight="bold" align="left">Minimum 6 characters required</Text> </FormHelperText>

                    <Box align="left" mt="20px" display="flex">

                        <input type="checkbox" name="whatsappUpdates"  /> <Text color="white" fontSize="s" >Email me about special offers, new products and promotions</Text>
                    </Box>

                    <Input _hover={{cursor:"pointer"}} mt="20px" type="submit" w="200px" bg="purple.500" value="Register" onClick={addUser}  />
                    { showSpinner && <Spinner color="white" mb="-5px" ml="-40px" />}

                    <Text bg="white" fontSize="xs" mt="20px" align="left" mb="20px" fontWeight="bold" > By clicking Register, you agree to the <Link color="blue.400">Terms and Conditions</Link> & <Link color="blue.400">Privacy Policy</Link> of 1800flowers.com </Text>

                    {/* <Button w="250px" bg="purple.500" align="left">Register</Button> */}


                </FormControl>

                <Box display="flex" justifyContent="center" alignItems="center" >
                    <Box borderTop="2px solid white" w="100px"  mr="10px" ></Box>
                    <Text color="white" fontWeight="bold" >Or Sign In with</Text>
                    <Box borderTop="2px solid white" w="100px" ml="10px" ></Box>
                </Box>

                <Box display="flex" mt="20px" justifyContent="center" >

                    <Link>
                        <Box id={styles.facebook} bg="#4469b0" h="50px" w="200px" border="1px solid black" display="flex" alignItems="center" >
                            <Image borderRadius="50%" ml="10px" w="10%" src="https://png.pngitem.com/pimgs/s/20-209894_transparent-round-logo-png-round-facebook-icon-png.png" alt="facebook" />
                            <Text ml="5px" >Sign in with facebook</Text>
                        </Box>
                    </Link>

                    <Link>

                        <Box id={styles.google} bg="white" w="200px" h="50px" border="1px solid black" display="flex" alignItems="center" >
                            <Image ml="10px" w="10%" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="google" />
                            <Text ml="10px" >Sign in with Google</Text>
                        </Box>
                    </Link>
                </Box>

            </Box>

            {/* </Box> */}
        </Box>
    </Box>
}