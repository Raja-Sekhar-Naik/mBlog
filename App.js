import  Navbar  from './components/Navbar';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import './App.css';
import { Grid } from '@mui/material';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
      
    </div>
  );
}

export default App;
