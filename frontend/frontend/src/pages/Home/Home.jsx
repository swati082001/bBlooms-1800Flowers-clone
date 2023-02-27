import { Box, Link, Image, Heading, Text, Button, Select, Input } from "@chakra-ui/react";

import styles from "../../Styles/Home.module.css";

export const Home = () => {

    return <Box width="100vw"  h="auto" overflow="hidden" >

        <Box p="10px" border="1px solid red">
            <Link>PRESIDENTS DAY SALE: SAVE UP TO 40% | SHOP NOW </Link>
        </Box>
        <Box id={styles.bannerBox}  mt="60px" >
            <Image id={styles.bannerBox}  zIndex="0"  position="absolute" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7f295fb7ba086b4b/63ebb5b941faab583d488ac4/send-birthday-flowers-hero-fy23.jpg?quality=75&auto=webp&optimize={medium}" alt="banner" />

            <Box id={styles.heading} position="relative" left="900px" top="50px" zIndex="1" w="450px" >
                <Text fontSize="2xl" >MAKE EVERY</Text>
                <Heading>BIRTHDAY SPECIAL</Heading>
                <Text noOfLines={2} >We love birthdays, like we love flowers. Find everything form party flowers to personalized gifts right here.</Text>
                <Button>SHOP</Button>
            </Box>


            <Box id={styles.perfectGift} zIndex="1" position="relative" top="80px" left="270px" h="100px" alignItems="center" boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" w="1000px" display="flex" justifyContent="space-around" bg="blue.200" >

                <Text fontSize="2xl" id={styles.text1} >FIND THE PERFECT GIFT</Text>
                <Input bg="white" w="240px" type="text" placeholder="ZIP CODE (wher is it going?)" />
                <Select bg="white" w="200px" placeholder='OCCASION'>
                    <option value='option1'>Birthday</option>
                    <option value='option2'>Anniversary</option>
                    <option value='option3'>Congratulations</option>
                    <option value='option1'>Flowers & Gifts</option>
                    <option value='option2'>Get Well</option>
                    <option value='option3'>I'm Sorry</option>
                    <option value='option1'>Just Because</option>
                    <option value='option2'>Love & Romance</option>
                    <option value='option3'>New Baby</option>
                    <option value='option1'>Sympathy</option>
                    <option value='option2'>ThankYou</option>
                </Select>

                <Button>FIND</Button>

            </Box>

        </Box>

        <Box mt="150px" className={styles.excluGifts} >

            <Heading>Send Flowers & Exclusive Gifts</Heading>

            <Box display="flex" justifyContent="space-around" w="90%" margin="auto" mt="30px" >

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >

                    <Image  w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3595a4f11ad56e50/63d92b2699f0c910e171a33c/flower-delivery-same-day-silo-191167xl-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="sameDayFlowers" />

                    <Text>Same-Day Flower Delivery</Text>
                </Box>

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >
                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta2748b9a4b476529/63d304315ba46f75ddba03cf/sympathy-flowers-silo-191166XL-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="Sympathy" />

                    <Text>Sympathy</Text>
                </Box>

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >
                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt867d5477b7adc192/627be2023debbf3afdd2ea1e/get-well-flowers-146761-silo-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="GetWell" />

                    <Text>Get Well</Text>

                </Box>

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >
                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt76e3b18a47e939d8/627be2672bec9b34ea68c61c/blooming-love-161132-silo-v3_260x284.jpeg?quality=75&auto=webp&optimize={medium}" alt="love&romance" />

                    <Text>Love & Romance</Text>

                </Box>

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >
                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7bc6d66cf28f5b49/625f1ce82777714c51b31360/chocolate-covered-strawberries-delivery-silo-192552m_260x284_(2).jpeg?quality=75&auto=webp&optimize={medium}" alt="chocolateCoveredStrawberries" />

                    <Text>Chocolate Covered Strawberries</Text>

                </Box>

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >
                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt1cadd11290759d19/63d3046a5d9574542d40a84e/just-because-flowers-silo-191168xl-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="justBecause" />

                    <Text>Just Because</Text>

                </Box>
            </Box>
        </Box>


        <Box display="flex" justifyContent="space-between"  w="80%" m="auto" h="auto" mt="100px" >


            <Box w="45%" h="auto ">
                <Link>

                    <Image boxShadow="rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8eb26a7c8e341856/63ed0d369b18a175e2431aee/best-selling-flowers-tier-fy23-v2.jpg?quality=60&auto=webp&optimize={medium}" alt="BestSellers" />
                    <Text className={styles.text2} zIndex="1" bg="black" opacity="0.9" h="50px" pt="10px" color="white" fontSize="xl" position="relative" bottom="50px" border="1px solid black" >Best Sellers</Text>
                </Link>
            </Box>

            <Box w="45%" >

                <Link>

                    <Image boxShadow="rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;"  src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8f5b6ec0917f2c05/63ebb95e346bf05048c801ad/house-plants-tier-fy23.jpg?quality=60&auto=webp&optimize={medium}" alt="hosue Plants" />
                    <Text className={styles.text2} zIndex="1" bg="black" opacity="0.9" h="50px" pt="10px" color="white" fontSize="xl" position="relative" bottom="50px" border="1px solid black" >House Plants</Text>
                </Link>
            </Box>


        </Box>

        <Box m="auto" mt="100px" display="flex" justifyContent="center" w="80%" >
            <Image boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt89e2d695453f2b2f/63ebba1dbc8ae610d2fd9f1a/experience-diy-gifts-zone-10-banner-fy23.jpg?quality=70&auto=webp&optimize={medium}" alt="DIY" />
        </Box>

        <Box margin="auto" mt="150px"  w="80%" className={styles.excluGifts} >
            <Heading>Trending Flowers & Gifts</Heading>
            <Box display="flex" justifyContent="space-around" w="auto" margin="auto" mt="30px" >

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}}   >

                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3595a4f11ad56e50/63d92b2699f0c910e171a33c/flower-delivery-same-day-silo-191167xl-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="sameDayFlowers" />

                    <Text noOfLines={2} w="auto" align="center" >Floral Embrace</Text>
                </Box>

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >
                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta2748b9a4b476529/63d304315ba46f75ddba03cf/sympathy-flowers-silo-191166XL-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="Sympathy" />

                    <Text noOfLines={2} w="auto" align="center" >Assorted Tulip Bouquet

                       </Text>
                </Box>

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >
                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt867d5477b7adc192/627be2023debbf3afdd2ea1e/get-well-flowers-146761-silo-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="GetWell" />

                    <Text noOfLines={2} w="auto" align="center" >Fields of Europe® Romance

                        </Text>

                </Box>

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >
                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt76e3b18a47e939d8/627be2672bec9b34ea68c61c/blooming-love-161132-silo-v3_260x284.jpeg?quality=75&auto=webp&optimize={medium}" alt="love&romance" />

                    <Text noOfLines={2} w="auto" align="center" >Two Dozen Red Roses

                        </Text>

                </Box>

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >
                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7bc6d66cf28f5b49/625f1ce82777714c51b31360/chocolate-covered-strawberries-delivery-silo-192552m_260x284_(2).jpeg?quality=75&auto=webp&optimize={medium}" alt="chocolateCoveredStrawberries" />

                    <Text noOfLines={2} w="auto" align="center" >Two Dozen Assorted Roses

                        </Text>

                </Box>

                <Box _hover={{ transform:"scale(1.1)", transition:"all 330ms",cursor:"pointer "}} >
                    <Image w="220px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt1cadd11290759d19/63d3046a5d9574542d40a84e/just-because-flowers-silo-191168xl-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="justBecause" />

                    <Text noOfLines={2} w="auto" align="center" >One of a Kind Bouquet 

                       </Text>

                </Box>
            </Box>

        </Box>
        <Box mt="100px" >
            {/* <Image w="30px" ml="350px" mb="-38px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4661dd99d6401481/60184a440f1c0c1aa6f87986/instagram-icon.svg?quality=75&auto=webp&optimize={medium}" alt="instagram" /> */}
            <Heading> Share Your #MadeMeSmile Flowers Moment</Heading>
            <Box m="auto" mt="20px" w="85%" display="flex" gap="20px" justifyContent="center" >

                <Image w="24%" boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;" borderRadius="10px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte2a16fdd5ffe3f9b/63a6027fd70a0827292d3e8f/ugc-image-charming-garden-bouquet.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
                <Image w="24%" boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;" borderRadius="10px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltea45456133e4ec47/63a602e7eee5ef585b469cab/ugc-image-peperomia-baby-rubber-plant.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
                <Image w="24%" boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;" borderRadius="10px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0e6ea64769f54f55/63a603239d04dd206dffc01d/ugc-image-lovely-lavender-medley-winter.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
                <Image w="24%" boxShadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;" borderRadius="10px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt19f3d333358d845a/63a6035320e5a54e6ea886ac/ugc-image-magnificent-roses-preserved-blue-velvet-roses.jpg?quality=75&auto=webp&optimize={medium}" alt="" />

            </Box>
        </Box>

        <Box m="auto" mt="100px" w="80%" bg="purple.200" borderRadius="10px" p="20px" boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;" >
            <Heading>Some of the Great Things Our Customers Say About Us</Heading>

            <Box display="flex" mt="50px" >
                <Box w="25%" p="5px" borderRight="1px solid black" >
                    <Image display="block" margin="auto" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4c9be4e2d955776a/602a81580aba282006983f75/hp-reviews-final-167891.png?quality=70&auto=webp&optimize={medium}" alt="" />
                    <Text mt="10px" >Beautiful</Text>
                    <Text noOfLines={2} w="auto" margin="auto" mt="10px" >"I bought these for my nana's birthday she said they were amazingly beautiful"</Text>
                    <Text mt="10px" >-Pamela</Text>
                </Box>
                <Box w="25%" p="5px" borderRight="1px solid black">
                    <Image display="block" margin="auto" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2b874f93791fce4a/62b09064482ba357e65ddbe8/web_icons_125x125_ocean_breeze_orchids.png?quality=70&auto=webp&optimize={medium}" alt="" />
                    <Text mt="10px" >Best Flowers</Text>
                    <Text noOfLines={2} w="auto" margin="auto" mt="10px" >"These flowers are beautiful and just as vibrant as the picture. One of the most beautiful bouquets I have ever seen."</Text>
                    <Text mt="10px" >-Michelle</Text>
                </Box>
                <Box w="25%" p="5px" borderRight="1px solid black" >
                    <Image display="block" margin="auto" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte0c04d8be69858b7/6259b075b9aa584a4e32649f/web_icons_125x125_classic_budding_rose.png?quality=70&auto=webp&optimize={medium}" alt="" />
                    <Text mt="10px" >Very Happy</Text>
                    <Text noOfLines={2} w="auto" margin="auto" mt="10px" >"I love how the recipient can plant the roses and enjoy them for a long time. The plant is healthy and the candle I ordered with it, smells great."</Text>
                    <Text mt="10px" >-Betty</Text>
                </Box>
                <Box w="25%" p="5px" > 

                    <Image display="block" margin="auto" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt854645311f2a8ec4/621cf518ba043c4a2c4a9a54/web_icons_125x125_Gourmet_Drizzled_Berries-v2.png?quality=70&auto=webp&optimize={medium}" alt="" />
                    <Text mt="10px" >Sweet Anniversary</Text>
                    <Text noOfLines={2} w="auto" margin="auto" mt="10px" >"The strawberries arrived on time and were fantastic as always. Definitely made my Anniversary a lot sweeter."</Text>
                    <Text mt="10px" >-Brian</Text>
                </Box>
            </Box>
        </Box>

        <Box  w="80%" m="auto" mt="100px" >
            <Box p="10px" bg="purple.100"  >
                <Text ml="10px" align="left" fontSize="xl" >Send Flowers Online with Flower Delivery by 1-800-Flowers.com, the World's Favorite Florist!</Text>
            </Box>
            <Box align="left" mt="10px" >
                <Text>There's no better place to order flowers online than 1-800-Flowers.com. Whether you're looking to buy flowers and gifts like roses, orchids, gift baskets, bonsai trees, flowering plants or wedding bouquets, we have the highest quality blooms and the most talented florists who can create exactly what you order. Dazzle and delight your loved ones wherever they may be with truly original flowers and gifts from 1-800-Flowers.com.</Text>
            </Box>

            <Box p="10px" mt="20px" bg="purple.100" >
                <Text ml="10px" align="left" fontSize="xl" >Quick Flower Delivery and Great Customer Service</Text>
            </Box>
            <Box align="left" mt="10px" >
                <Text>Same-day flower delivery is available every day, for all seasons: spring, winter, summer and fall. To send flowers for same-day delivery, all you have to do is place your order by the following times in the gift receiver's time zone: 2:30 p.m. weekdays, 1:15 p.m. Saturdays, and 11:45 a.m. Sundays. Our customer service team is standing by to help you with any gift or flower order. Whether you're sending red roses to your sweetie, celebrating a birthday, or sending a get well gift to someone feeling under the weather, if you have questions, our team has answers! Just call 1-800-356-9377 or place an order for flower delivery online. We will help you find and deliver the perfect flowers, plants, or gift to celebrate life's most meaningful moments - from birthday gift recommendations, to anniversary floral arrangements she is sure to love.

For sympathy gifts and funeral flowers, our team of experienced Sympathy Advisors are ready to assist you at 1-866-538-2259.</Text>
            </Box>

            <Box p="10px" mt="20px" bg="purple.100" >
                <Text ml="10px" align="left" fontSize="xl" >Order the Best Flowers Online for All Occasions and Holidays</Text>
            </Box>
            <Box align="left" mt="10px" >
                <Text>We're the best choice when shopping online for gifts and flowers just because, or for special occasions like Mother's Day or Valentine's Day. Choose the perfect gift from the best selection of flower arrangements, roses, mixed bouquets, fruit arrangements, gourmet baskets, and other gifts. With a wide variety of colors, sizes and seasonal themes, you can buy flowers and gifts for everyone. With same-day gift delivery, we're also your source for last-minute gifts, too!

Deliver smiles all year long with Free Shipping/No Service Charge on all your flowers & gifts when you join the Celebrations Passport® program.</Text>
            </Box>

            <Box  p="10px" mt="20px" bg="purple.100" >
                <Text ml="10px" align="left" fontSize="xl" >Send Flowers Internationally</Text>
            </Box>
            <Box align="left" mt="10px" >
                <Text>We deliver flowers across the United States and around the world. If you want to send flowers internationally, trust us to deliver your most heartfelt messages. Because of our partnerships with local florists and flower growers, we are able to ensure that bouquets are delivered fresh from the field and on time. Our flower arrangements are artfully created and delivered perfectly arranged by professional florists.</Text>
            </Box>

            <Box  p="10px" mt="20px" bg="purple.100" >
                <Text ml="10px" align="left" fontSize="xl">Fresh Flowers Guaranteed by Trusted Florists</Text>
            </Box>
            <Box align="left" mt="10px">
                <Text>In 1976, Jim McCann, founder of 1-800-Flowers.com, opened his first retail florist shop and forever changed the way people buy flowers for birthdays, anniversaries, and other special occasions. For more than 40 years, our passion has been to help you connect and express yourself to the important people in your life by providing the finest selection of beautiful flowers and arrangements available for same day or next day delivery, from roses and orchids to tulips, carnations, and daisies. With quality supported by our 100% Satisfaction Guarantee, you can also find plants, gift baskets, gourmet foods, and stuffed animals that are perfect for every occasion. Ranked consecutively on the Top 1000 list of North America’s Leading Online Retailers by Digital Commerce 360, 1-800-FLOWERS.COM, Inc. is proud to offer solutions for every gifting need, whether you're looking for flower delivery across town or across the country.</Text>
            </Box>
        </Box>

    </Box>
}