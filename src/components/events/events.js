import {Grid,Container, CircularProgress} from '@material-ui/core';
import useStyles from './styles';
import Event from './event/event';
import {useSelector } from 'react-redux';

const Events=({setCurrentId})=>{
    const events = useSelector((state) => state.events);
    const classes = useStyles();

    return(
        !events.length ? <CircularProgress/> : (
            <Container className ={classes.events} >
                { events.map((event)=>(
                    <Grid  container lg ={12} md = {4}>
                        <Event key={event.eventId} event= {event} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Container>
        )
    );
}
export default Events;