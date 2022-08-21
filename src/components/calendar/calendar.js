import {useState,useEffect} from 'react';
import moment from 'moment';
import {yearOptions, monthOptions,weekArray,gridArray } from '../../constants/index';
import {Grid,Box,Card,Container} from '@material-ui/core';
import useStyles from './styles';


const Calendar= ({time}) =>{
  const classes = useStyles();

      // calculate how many days in a month?
    const startOfDay = moment().year(time.year).month(time.month).startOf("month").format('dddd');
    const monthSize = parseInt(moment().year(time.year).month(time.month).endOf("month").format('DD'));
    const startIndex = weekArray.indexOf(startOfDay)
    const endIndex = startIndex + monthSize;

    console.log(startIndex);
    console.log(endIndex);
    return(
    <>
    <Grid container lg = {8} md ={8} className = {classes.weekContainer}>
      {weekArray.map((data,i) =>
        <Grid className = {classes.weekDayContainer} item >
          <Box >{data}</Box>
        </Grid>)}

      {gridArray.map( (data, i) => 
        i >= startIndex && i < endIndex ?
        <Grid className = {classes.weekDayContainer} item >
          <Box >{i - startIndex + 1 }</Box>
        </Grid>:
        <Grid className ={classes.weekDayContainer} item>
          <Box >T</Box>
        </Grid>
      )}
    </Grid>

    <Grid container lg ={2} md = {4}>
      <Container>T</Container>
    </Grid>

</>
    );
};
export default Calendar;