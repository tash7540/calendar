import './App.css';
import CalendarHeader from './components/header/header';
import Calendar from './components/calendar/calendar';
import Events from './components/events/events';
import DialogComponent from './components/dialog/dialog';
import {useState} from 'react';
import {Grid,Container,Button} from '@material-ui/core';
import { getEvents} from './actions/events';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const [time,setTime] = useState({year:2022,month:0});
  const events = useSelector((state) => state.events);
  return (
    <Container maxWidth="xl">
      <Grid container >
      <CalendarHeader time ={time} setTime={setTime}/>
        <Grid lg={9} md = {8}>
            {console.log(events)}
          <Calendar time ={time} />
        </Grid>
        <Grid lg = {3}>
          <Events events = {events}/>
        </Grid>
      </Grid>
      <div style ={{marginLeft:'400px'}}></div>
    </Container>
  );
}

export default App;
