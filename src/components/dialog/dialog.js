import { Button,Dialog,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions} from '@material-ui/core';
import { useState } from 'react';
import { AppBar,Container,Grid} from '@material-ui/core';
import { yearOptions, monthOptions } from '../../constants/index';
import useStyles from './styles';


const DialogComponent = ()=>{
    const classes = useStyles();
    const [event,setEvent] = useState({event:'',details:'',time:''});
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        clear();

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setOpen(false);

        console.log(event);

        clear();
    }
    const clear = () => {
        setEvent({event:'',details:'',time:''});
    };

    return(
        <>
            <Button className = {classes.button}variant="outlined" onClick={handleClickOpen}>
            Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Event</DialogTitle>
            <DialogContent>
                <TextField autoFocus margin="dense" id="event" label="Event Name" type="text" fullWidth variant="standard" 
                value={event.event} onChange={(e) => setEvent({ ...event, event: e.target.value })}  />

                <TextField autoFocus margin="dense" id="detail" label="Event Details" type="text" fullWidth variant="standard" 
                value={event.details} onChange={(e) => setEvent({ ...event, details: e.target.value })}  />
                <TextField autoFocus margin="dense" id="date" label="Time" type="date" fullWidth variant="standard"
                InputLabelProps={{shrink: true,}} value={event.time} 
                onChange={(e) => setEvent({ ...event, time: e.target.value })} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Add Event</Button>
            </DialogActions>
            </Dialog>
        </>
    );
};
export default DialogComponent;