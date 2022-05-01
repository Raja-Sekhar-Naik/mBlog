import { Button, Card,CardActionArea,CardActions,CardContent, CardMedia,  Typography } from '@mui/material';
import React from 'react'



const Post = () => {
    
  return (
      <Card className='card'>
          <CardActionArea>
          <CardMedia 
            className='media'
            component="img"
            alt="bike"
            image="https://images.app.goo.gl/7nSKzAfHC9rfahAS6"
            />
          <CardContent>
              <Typography variant='h5'>First</Typography>
              <Typography variant='body'>Body</Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
          
      </Card>
    
  );
};

export default Post;