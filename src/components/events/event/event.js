import {useState,useEffect} from 'react';
import moment from 'moment';
import {yearOptions, monthOptions,weekArray,gridArray } from '../../../constants/index';
import {Grid,Box,Card,Container,Button,CardActions, CircularProgress,Typography} from '@material-ui/core';
import useStyles from './styles';

const Event=({data})=>{
    const classes = useStyles();

    return(
        <Card className = {classes.card}>
            <div style={{padding:'12px'}}>
            <Typography fullWidth>Event: {data.eventName}</Typography>
            <Typography fullWidth >Event Date: {data.eventTime.slice(0,10)}</Typography>
            <Typography fullWidth>Notes: {data.eventNote}</Typography>
            </div>
            <CardActions >
            <Button size="small" color="primary">Like  </Button>
            <Button size="small" color="primary" >Edit</Button>
            </CardActions>
        </Card>

        
    );
}
export default Event;