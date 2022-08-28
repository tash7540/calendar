import {deleteEvent} from '../../../actions/events';
import { useDispatch } from 'react-redux';
import {Grid,Box,Card,Container,Button,CardActions, CircularProgress,Typography} from '@material-ui/core';
import useStyles from './styles';

const Event=({event})=>{
    const classes = useStyles();
    const dispatch = useDispatch();


    return(
        <Card className = {classes.card}>
            <div style={{padding:'12px'}}>
            <Typography fullWidth>Event: {event.eventName}</Typography>
            <Typography fullWidth >Event Date: {event.eventTime.slice(0,10)}</Typography>
            <Typography fullWidth>Notes: {event.eventNote}</Typography>
            </div>
            <CardActions >
            <Button size="small" color="primary">Edit  </Button>
            <Button size="small" color="primary" onClick={() => dispatch(deleteEvent(event.eventId))}>Delete</Button>
            </CardActions>
        </Card>

        
    );
}
export default Event;