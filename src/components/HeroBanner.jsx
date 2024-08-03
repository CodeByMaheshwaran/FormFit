import React from 'react';
import { Box,Stack,Typography,Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import MenBannerImage from '../assets/images/MenBanner.jpg'


const HeroBanner = () => {
  return (
    <Box
    sx={{
        mt:{ lg:'212px',xs: '70px'},
        ml:{ sm:'50px' }}} position="relative" p="20px"
    >
        <Typography data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" fontWeight={700} 
        sx={{ fontSize:{ lg:'44px' , xs:'40px'} }}
        mb="23px" mt="30px"
        >
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises
        </Typography>
        <Button  data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-delay="300"
        variant='contained' color="error" href="#exercises"
        sx={{backgroundColor:'#ff2625', padding:'10px'}}>Explore Exercises</Button>
        <Typography fontWeight={600} color="#ff2625" sx={{
            opacity:0.1,
            diplay:{ lg:'block', xs:'none'}
        }} fontSize='200px'>
          Exercise
        </Typography>
        <img src={HeroBannerImage} data-aos="zoom-in" data-aos-once="true"
        alt="banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner