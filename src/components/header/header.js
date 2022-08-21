import { FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';
import { useState } from 'react';
import { AppBar,Container,Grid} from '@material-ui/core';
import { yearOptions, monthOptions } from '../../constants/index';
import useStyles from './styles';


const CalenderHeader=({time,setTime})=> {
    const classes = useStyles();

    return (
      <Container className={classes.container}>
        <FormControl  className={classes.form}>
          <Select
            id="select-year"
            label="Year"
            onChange={(e) => setTime({...time,year: e.target.value})}
            defaultValue={time.year}
          > 
            {yearOptions.map((data) => (
              <MenuItem value = {data}>{data}</MenuItem>
            ))}
          </Select>

        </FormControl>
        <FormControl className={classes.form}>
          <Select
            id="select-month"
            label="Month"
            onChange={(e)=> setTime({...time,month: parseInt(e.target.value-1)})}
            defaultValue={time.month +1}

          > 
            {monthOptions.map((data) => (
              <MenuItem value = {data}>{data}</MenuItem>
            ))}
          </Select>
          </FormControl>
        </Container>
    );
  }
  
  export default CalenderHeader;