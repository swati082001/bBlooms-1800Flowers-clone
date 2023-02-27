import { Box, Link, Text, Image } from "@chakra-ui/react";
import styles from "../Styles/Footer.module.css";

export const Footer = () => {

    return <Box p="20px" color="white" mt="50px" bg="purple.700" display="flex" justifyContent="space-evenly" >

        <Box id={styles.firstBox} display="flex" gap=" 50px" >
            <Box>
                <ul style={{ textAlign: "left" }} >
                    <Text fontWeight="bold" >MORE WAYS TO SHOP</Text>
                    <Link><li>Flower Delivery Same Day</li></Link>
                    <Link><li>Flowers Arrangements</li></Link>
                    <Link><li>Sympathy Flowers & Gifts</li></Link>
                    <Link><li>Roses</li></Link>
                    <Link><li>Birthday Flowers & Gifts</li></Link>
                    <Link><li>Flower Subscription</li></Link>
                    <Link><li>Plants</li></Link>
                    <Link><li>Gifts Basket and Food</li></Link>
                    <Link><li>Mother's Day Flowers</li></Link>
                    <Link><li>International Flower Delivery</li></Link>
                    <Link><li>Find a local Florist</li></Link>
                    <Link><li>Corporate Gift</li></Link>
                    <Link><li>Chocolate Covered Strawberries</li></Link>
                    <Link><li>Marketplace Sellers</li></Link>
                    <Link><li>Sitemap</li></Link>
                </ul>
            </Box>

            <Box id={styles.subBox2} >
                <ul style={{ textAlign: "left" }} >
                    <Text fontWeight="bold" >CUSTOMER SERVICE</Text>
                    <Link><li>Customer Service</li></Link>
                    <Link><li>COVID-19 Updates</li></Link>
                    <Link><li>eGifts Cards</li></Link>
                    <Link><li>Contact Us</li></Link>
                    <Link><li>Do not Sell My Personl Information</li></Link>
                    <Link><li>Allergy Warning</li></Link>
                    <Link><li>Funeral/Sympathy Advisor</li></Link>
                    <Link><li>Smile Gaurantee</li></Link>

                </ul>
            </Box>

            <Box id={styles.hiddenBox} display="none" >
                <Box id={styles.hiddenSubBox1} >
                    <ul style={{ textAlign: "left" }} >
                        <Text fontWeight="bold" >OUR STORES</Text>
                        <Link><li>Store Locator</li></Link>
                        <Link><li>Franchise Oppertunities</li></Link>
                        <Link><li>Local DIY Events</li></Link>
                    </ul>
                </Box>


                <Box id={styles.secondSubBox2} >
                    <ul style={{ textAlign: "left" }} >
                        <Text fontWeight="bold" >CORPORATE</Text>
                        <Link><li>About Us</li></Link>
                        <Link><li>Our Brands</li></Link>
                        <Link><li>Social Responsibility</li></Link>
                        <Link><li>Careers</li></Link>
                        <Link><li>News & Media</li></Link>
                        <Link><li>Investors</li></Link>

                    </ul>
                </Box>
            </Box>
        </Box>

        <Box id={styles.secondBox} display="flex" gap="50px" >
            <Box>
                <ul style={{ textAlign: "left" }} >
                    <Text fontWeight="bold" >OUR STORES</Text>
                    <Link><li>Store Locator</li></Link>
                    <Link><li>Franchise Oppertunities</li></Link>
                    <Link><li>Local DIY Events</li></Link>
                </ul>
            </Box>


            <Box id={styles.secondSubBox2} >
                <ul style={{ textAlign: "left" }} >
                    <Text fontWeight="bold" >CORPORATE</Text>
                    <Link><li>About Us</li></Link>
                    <Link><li>Our Brands</li></Link>
                    <Link><li>Social Responsibility</li></Link>
                    <Link><li>Careers</li></Link>
                    <Link><li>News & Media</li></Link>
                    <Link><li>Investors</li></Link>

                </ul>
            </Box>
        </Box>

        <Box>
            <Text fontWeight="bold" >FOLLOW US</Text>
            <Box display="flex" gap="20px" mt="20px" >

                <Box id={styles.socialMediaBox} display="flex" gap="20px" >

                    <Link> <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt787e53ec7675db95/5ee1016e26fd9f3b64a5abe7/social-icon-twitter.png" alt="twitter" /> </Link>
                    <Link> <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt71c1a01174910073/5ee101831579a83a8b80b9ad/social-icon-facebook.png" alt="facebook" /> </Link>
                </Box>
                <Box id={styles.socialMediaBox2} display="flex" gap=" 20px" >

                    <Link> <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt78b7b39043ac2de3/5ee101965cffd6317204ad4a/social-icon-instagram.png" alt="instagram" /> </Link>
                    <Link> <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt6ae8236f023d5359/5ee101a4f2c45903a4be0b8b/social-icon-pinterest.png" alt="pinterest" /> </Link>
                </Box>
            </Box>
            <Box  >
                <Link> <Image id={styles.youtube} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbd439ba082738790/5ee101b758284c442bf7faea/social-icon-youtube.png" alt="youtube" /> </Link>

            </Box>
        </Box>

    </Box>
}