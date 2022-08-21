import { FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';
import { useState } from 'react';

import { yearOptions, monthOptions } from '../constants/index';


const CalenderHeader=({onSetYear,onSetMonth})=> {
    
    return (
      <>
        <FormControl>
          <InputLabel>Year</InputLabel>
          <Select
            id="select-year"
            label="Year"
            onChange={(e) => onSetYear(e.target.value)}
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
            onChange={(e) =>  onSetMonth(e.target.value)}
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