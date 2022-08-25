import { Button,Dialog,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions} from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yearOptions, monthOptions } from '../../constants/index';
import useStyles from './styles';
import { createEvent} from '../../actions/events';


const DialogComponent = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();


    const [event,setEvent] = useState({eventName:'', eventTime:'', eventNote:''});
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        clear();

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setOpen(false);
        dispatch(createEvent(event));
        console.log(event);

        clear();
    }
    const clear = () => {
        setEvent({event:'',details:'',time:''});
    };

    return(
        <div>
            <Button className = {classes.button}variant="outlined" onClick={handleClickOpen}>
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