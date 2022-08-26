import useStyles from './styles';

const Day= ({year,month,day,events}) =>{
    const classes = useStyles();
    const newMonth = month+1 <10 ? '0'+ String(month+1) : String(month+1);
    const time = year+'-'+newMonth+'-'+day;
    const data = events.filter( ( data ) => data.eventTime.slice(0,10) === time );
    console.log(data);

  return(
      <>
      {data.map((x) =>
        <div className = {classes.container}>{x.eventName} - {x.eventNote}</div>
      )}
    <div>{day}</div>
    </>
  );

};
export default Day;