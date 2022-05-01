import { Notifications, Search } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase,  Toolbar, Typography} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import './Navbar.css';


const Navbar = () => {
  
  return (
    <AppBar position='static'>
      <Toolbar className='toolbar'>
        
        <Typography variant='h6'>Raja Sekhar</Typography>
        
        <div className='mysearch'>
          <Search />
          <InputBase placeholder='Search.....' className='input' />
        </div>
        <div className='icons'>
          <Badge badgeContent={4} color="error" className='mail' >
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error" className='notify'>
            <Notifications className='notify'/>
          </Badge>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  className='avatar'/>
           
        </div>
        
        
      </Toolbar>
    </AppBar>
   
  );

};
 
export default Navbar;