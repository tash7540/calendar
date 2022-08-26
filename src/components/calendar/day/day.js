import {useState,useEffect} from 'react';
import moment from 'moment';
import {yearOptions, monthOptions,weekArray,gridArray } from '../../../constants/index';
import {Grid,Box,Card,Container} from '@material-ui/core';
//import useStyles from './styles';


const Day= ({year,month,day,events}) =>{
    const newMonth = month+1 <10 ? '0'+ String(month+1) : String(month+1);
    const time = year+'-'+newMonth+'-'+day;
    const data = events.filter( ( data ) => data.eventTime.slice(0,10) === time );
    console.log(data);

  return(
      <>
      {data.map((x) =>
        <div>{x.eventName} - {x.eventNote}</div>
      )}
    <div>{day}</div>
    </>
  );

};
export default Day;