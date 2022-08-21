import logo from './logo.svg';
import './App.css';
import CalendarHeader from './components/header.js';
import {useState,useEffect} from 'react';
import moment from 'moment';

function App() {
  const [month,setMonth] = useState(1);
  const [year,setYear] = useState(2022);
  const startOfDay = moment().year(year).month(month).startOf("month").format('ddd');
  const monthSize = parseInt(moment().year(year).month(month).endOf("month").format('DD'));
  console.log(month);
  console.log(startOfDay);
  console.log(monthSize);
  const onSetYear=(value)=>{
    setYear(value)
  }
  const onSetMonth=(value)=>{
    setMonth(value)
  }



  return (
    <div className="App">
      <CalendarHeader onSetYear = {onSetYear} onSetMonth = {onSetMonth}/>
      

    </div>
  );
}

export default App;
