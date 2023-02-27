import React from 'react'
import Checkout from './Checkout'
import { Box, Image ,Flex,Text} from '@chakra-ui/react'
import Logo from "../../assets/logo.png"
import Payment from '../PAYMENT/Payment'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const [checkout,setCheckout] = React.useState(true)
    const [payment,setpayment] = React.useState(false)
    const [review,setReview] = React.useState(false)
    const navigate = useNavigate()

    function handlecheckout(){
        setCheckout(true)
        setpayment(false)
        setReview(false)
    }

    function handlePayment(){
        setCheckout(false)
        setpayment(true)
        setReview(false)
    }

    function handlereview(){
        setCheckout(false)
        setpayment(false)
        setReview(true)
    }
    function handleImage(){
      navigate("/")
    }
  return (
    <div>
        <Box width={{base:"100%",sm:"100%",md:"100%",lg:"100%"}} bg={"white"}>
       <Flex direction={{base:"column",sm:"column",md:"row",lg:"row"}} justifyContent={{base:"center",sm:"center",md:"space-between",lg:"space-evenly"}} alignItems={{base:"center",sm:"center",md:"",lg:""}}>

      <Image onClick={handleImage} width={{base:"20%",sm:"20%",md:"10%",lg:"8%"}} ml={"10px"} src={Logo} alt=""/>

         <Box ml={{lg:"400px",base:"0px",sm:"",md:-1}} width={"50%"}>
          <Flex direction={{base:"row",sm:"row",md:"row",lg:"row"}} justifyContent={{base:"space-between",sm:"",md:"space-around",lg:"initial"}}>
            {checkout ? (<Box borderBottom={"3px solid #65388b"} mr={{base:"0px",lg:"50px",sm:"20px",md:"0px"}}>
            <Text  onClick={handlecheckout} textStyle={"CheckoutNav"} pt="20px">Delivery</Text>
            </Box>):(<Box mr={{base:"0px",lg:"50px",sm:"20px",md:"0px"}}>
            <Text onClick={handlecheckout} textStyle={"CheckoutNav"} pt="20px">Delivery</Text>
            </Box>)}
            
            {payment ? (<Box borderBottom={"3px solid #65388b"} mr={{base:"0px",lg:"50px",sm:"20px",md:"0px"}}>
            <Text onClick={handlePayment} textStyle={"CheckoutNav"} pt="20px">Payment</Text>
            </Box>):(<Box mr={{base:"0px",lg:"50px",sm:"20px",md:"0px"}}>
            <Text onClick={handlePayment} textStyle={"CheckoutNav"} pt="20px">Payment</Text>
            </Box>)}
            
            {review ? (<Box borderBottom={"3px solid #65388b"} mr={{base:"0px",lg:"50px",sm:"20px",md:"0px"}}>
            <Text  onClick={handlereview} textStyle={"CheckoutNav"} pt="20px">Review</Text>
            </Box>):(<Box mr={{base:"0px",lg:"50px",sm:"20px",md:"0px"}}>
            <Text  onClick={handlereview} textStyle={"CheckoutNav"} pt="20px">Review</Text>
            </Box>)}
            
          </Flex>
         </Box>

       </Flex>
      </Box>

      {checkout && <Checkout />}
      {payment && <Payment/>}

    </div>
  )
}

export default Main