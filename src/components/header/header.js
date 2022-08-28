import { FormControl,Select,MenuItem} from '@material-ui/core';
import { AppBar,Container} from '@material-ui/core';
import { yearOptions, monthOptions } from '../../constants/index';
import useStyles from './styles';
import DialogComponent from '../dialog/dialog';

const CalenderHeader=({time,setTime,currentId,setCurrentId})=> {
    const classes = useStyles();

    return (
      <Container className={classes.container}>
        <FormControl  className={classes.form}>
          <Select
            id="select-year"
            className={classes.select}

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
            className={classes.select}
            label="Month"
            onChange={(e)=> setTime({...time,month: parseInt(e.target.value-1)})}
            defaultValue={time.month +1}

          > 
            {monthOptions.map((data) => (
              <MenuItem value = {data}>{data}</MenuItem>
            ))}
          </Select>
          </FormControl>
        <div style ={{justifyContent:'flex-end'}}>
          <DialogComponent currentId={currentId} setCurrentId={setCurrentId}/>
        </div>

      </Container>
    );
  }
  
  export default CalenderHeader;