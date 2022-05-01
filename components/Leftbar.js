import { Bookmark,
   ExitToApp,
   Home,
    ListRounded,
    Person,
     PhotoCamera,
      PlayCircleFilledOutlined,
       Settings,
        Storefront,
         TabletMac } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import React from 'react'
import './Leftbar.css'

 const Leftbar = () => {
  return (
    <Container className='container'>

        <div className='item'>
          <Home className='icon'/>
          <Typography className='text'>Home Page</Typography>
        </div>

        <div className='item'>
          <Person className='icon'/>
          <Typography className='text'>Friend</Typography>
        </div>

        <div className='item'>
          <ListRounded className='icon'/>
          <Typography className='text'>Lists</Typography>
        </div>

        <div className='item'>
          <PhotoCamera className='icon'/>
          <Typography className='text'>Camera</Typography>
        </div>

        <div className='item'>
          <PlayCircleFilledOutlined className='icon'/>
          <Typography className='text'>Videos</Typography>
        </div>

        <div className='item'>
          <TabletMac className='icon'/>
          <Typography className='text'>Apps</Typography>
        </div>

        <div className='item'>
          <Bookmark className='icon'/>
          <Typography className='text'>Collection</Typography>
        </div>

        <div className='item'>
          <Storefront className='icon'/>
          <Typography className='text'>Market Place</Typography>
        </div>

        <div className='item'>
          <Settings className='icon'/>
          <Typography className='text'>Settings</Typography>
        </div>

        <div className='item'>
          <ExitToApp className='icon'/>
          <Typography className='text'>Log Out</Typography>
        </div>
    </Container>
  );
};

export default Leftbar;