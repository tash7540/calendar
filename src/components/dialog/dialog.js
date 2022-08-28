import { Button,Dialog,DialogTitle,DialogContent,TextField,DialogActions} from '@material-ui/core';
import { useState,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import useStyles from './styles';
import { createEvent} from '../../actions/events';
import { updateEvent } from '../../actions/events';

const DialogComponent = ({currentId,setCurrentId})=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const updatedEvent = useSelector((state) => (currentId ? state.events.find((e) => e.eventId === currentId) : null ));
    const [event,setEvent] = useState({eventName:'', eventTime:'', eventNote:''});
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
        clear();

    }

    useEffect(() =>{
        if(currentId) setOpen(true);
        
        if(updatedEvent) setEvent(updatedEvent);
      } ,[updatedEvent]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setOpen(false);
        if(currentId){
            dispatch(updateEvent(currentId,event))
        }
        else{
            dispatch(createEvent(event));

        }
        console.log(event);

        clear();
    }
    const clear = () => {
        setCurrentId(0);

        setEvent({event:'',details:'',time:''});
    };

    return(
        <div>
            <Button className = {classes.button} variant="outlined" onClick={handleClickOpen}>
            Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Event</DialogTitle>
            <DialogContent>
                <TextField autoFocus margin="dense" id="event" label="Event Name" type="text" fullWidth variant="standard" 
                value={event.eventName} onChange={(e) => setEvent({ ...event, eventName: e.target.value })}  />

                <TextField autoFocus margin="dense" id="detail" label="Event Details" type="text" fullWidth variant="standard" 
                value={event.eventNote} onChange={(e) => setEvent({ ...event, eventNote: e.target.value })}  />
                <TextField autoFocus margin="dense" id="date" label="Time" type="date" fullWidth variant="standard"
                InputLabelProps={{shrink: true,}} value={event.eventTime} 
                onChange={(e) => setEvent({ ...event, eventTime: e.target.value })} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Add Event</Button>
            </DialogActions>
            </Dialog>
        </div>
    );
};
export default DialogComponent;