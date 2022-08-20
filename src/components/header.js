import { FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';
import { useState } from 'react';

import { yearOptions, monthOptions } from '../constants/index';


const CalenderHeader=()=> {
    
  const [time,setTime] = useState({year:'',month:''});
  console.log(time);
    return (
      <>
        <FormControl>
          <InputLabel>Year</InputLabel>
          <Select
            id="select-year"
            label="Year"
            onChange={(e) => setTime({ ...time, year: e.target.value })}
          > 
            {yearOptions.map((data) => (
              <MenuItem value = {data}>{data}</MenuItem>
            ))}
          </Select>

        </FormControl>
        <FormControl>

          <InputLabel >Month</InputLabel>
          <Select
            id="select-month"
            label="Month"
            onChange={(e) => setTime({ ...time, month: e.target.value })}
          > 
            {monthOptions.map((data) => (
              <MenuItem value = {data}>{data}</MenuItem>
            ))}
          </Select>
          </FormControl>
        </>
    );
  }
  
  export default CalenderHeader;