import {useState,useEffect} from 'react';
import moment from 'moment';
import {yearOptions, monthOptions,weekArray,gridArray } from '../../constants/index';
import {Grid,Box,Card,Container, CircularProgress} from '@material-ui/core';
import useStyles from './styles';
import Event from './event/event';
import { useDispatch, useSelector } from 'react-redux';

const Events=()=>{
    const events = useSelector((state) => state.events);
    const classes = useStyles();
    return(
        !events.length ? <CircularProgress/> : (
            <Container className ={classes.events} >
                { events.map((event)=>(
                    <Grid  container lg ={12} md = {4}>
                        <Event key={event.eventId} event= {event} />
                    </Grid>
                ))}
            </Container>
        )
    );
}
export default Events;