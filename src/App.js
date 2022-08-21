import './App.css';
import CalendarHeader from './components/header/header';
import Calendar from './components/calendar/calendar';
import {useState} from 'react';
import {Grid,Container} from '@material-ui/core';


function App() {

  const [time,setTime] = useState({year:2022,month:0});

  return (
    <Container maxWidth="xlg">
      <Grid className ="calendar" container lg = {12} md = {12}>

      <CalendarHeader time ={time} setTime={setTime}/>
      <Calendar time ={time}/>
    </Grid>
    </Container>
  );
}

export default App;
