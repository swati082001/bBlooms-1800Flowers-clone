import { Box, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"



const SampleProductPage = () => {
    let [prod,setprod]= useState([])

let  getdata = () =>{

     axios.get("https://itchy-ruby-tweed-jacket.cyclic.app/products/allflower").then(((res)=>(
            setprod(res.data)
     ))).catch((err) => console.log(err))

    
}


useEffect(()=>{
 getdata()
},[])

console.log(prod)

  return (
    <Box>

    {/* <SimpleGrid border={"2px solid"} gap={5} columns={{base:1, md:2 , lg:3}} > */}
   
    {/* {
        prod.map((el) => (
     <Stack gap={5} border="2px solid">
        <Image src={el.image} h="350px"/>
        <Heading>{el.title}</Heading>
        <Text>{el.price}</Text>
        <Text>{el.description}</Text>
     </Stack>

        )


        )
    }
    
</SimpleGrid> */}



      
    </Box>
  )
}

export default SampleProductPage
