import './App.css';
import CalendarHeader from './components/header/header';
import Calendar from './components/calendar/calendar';
import Events from './components/events/events';
import {useState} from 'react';
import {Grid,Container} from '@material-ui/core';


function App() {
  const [time,setTime] = useState({year:2022,month:0});



  return (
    <Container maxWidth="xl">
      <Grid container >
      <CalendarHeader time ={time} setTime={setTime}/>
        <Grid lg={9} md = {8}>
          <Calendar time ={time} />
        </Grid>
        <Grid lg = {3}>
          <Events/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
