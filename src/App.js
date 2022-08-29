import './App.css';
import CalendarHeader from './components/header/header';
import Calendar from './components/calendar/calendar';
import Events from './components/events/events';
import {Grid,Container,AppBar,Typography} from '@material-ui/core';
import { useState,useEffect} from 'react';
import { useDispatch} from 'react-redux';
import { getEvents} from './actions/events';
//import icon from './images/note-img.png';
import icon from './images/note-icon.jpg';

function App() {
  const [time,setTime] = useState({year:2022,month:0});
  const [currentId,setCurrentId] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getEvents());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className="appBar" position="static" color="inherit">
        <Typography variant="h3" align="center" className="heading" >My Scheduler</Typography>
      </AppBar>
      <Grid container >
      <CalendarHeader time ={time} setTime={setTime} currentId={currentId} setCurrentId={setCurrentId}/>
        <Grid lg={9} md = {8}>
          <Calendar time ={time} />
        </Grid>
        <Grid lg = {3}>
          <Events setCurrentId={setCurrentId}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
