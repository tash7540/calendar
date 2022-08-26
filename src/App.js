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
    <Container maxWidth="lg">
      <Grid container>
        <Grid lg={9} md = {8}>
          <CalendarHeader time ={time} setTime={setTime}/>
            {console.log(events)}
          <Calendar time ={time} />
        </Grid>
        <Grid lg = {3}>
          <DialogComponent/>

          <Events events = {events}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
