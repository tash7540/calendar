import moment from 'moment';
import {weekArray,gridArray } from '../../constants/index';
import {Grid,Box} from '@material-ui/core';
import useStyles from './styles';
import Day from './day/day';
import { useSelector } from 'react-redux';

const Calendar= ({time}) =>{
  const classes = useStyles();

  // calculate how many days in a month?
  const startOfDay = moment().year(time.year).month(time.month).startOf("month").format('dddd');
  const monthSize = parseInt(moment().year(time.year).month(time.month).endOf("month").format('DD'));
  const startIndex = weekArray.indexOf(startOfDay)
  const endIndex = startIndex + monthSize;
  const events = useSelector((state) => state.events);

  console.log(startIndex);
  console.log(endIndex);
  return(
    <Grid container lg = {10} md ={8} className = {classes.weekContainer}>
      {weekArray.map((data,i) =>
        <Grid className = {classes.weekDayContainer} item >
          <Box >{data}</Box>
        </Grid>
      )}
      {gridArray.map( (data, i) => 
        i >= startIndex && i < endIndex ?
        <Grid className = {classes.weekDayContainer} item >
          <Day year={time.year} month = {time.month} day = {i - startIndex + 1} events = {events}/>
        </Grid>:
        <Grid className ={classes.weekDayContainer} item>
          <Box ></Box>
        </Grid>
      )}
    </Grid>
  );
};
export default Calendar;