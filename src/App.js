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
      <Grid className ="calendar" container lg = {12} md = {12}>
        <CalendarHeader time ={time} setTime={setTime}/>
        <DialogComponent/>
          {console.log(events)}
        <Calendar time ={time}/>
        <Events/>
      </Grid>
    </Container>
  );
}

export default App;
