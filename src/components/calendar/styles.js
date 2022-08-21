  
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
weekContainer:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
    width:'1000px',
},
weekDayContainer:{
    display: 'flex',
    flexDirection: 'row',
    margin: '4px',
    padding:'6px',
    border: '1px solid gray',
    textAlign: 'center',
    height: '35px',
    color: '#000',
    width:'140px',
    },
calendar:{
    flexDirection: 'row',
    padding:'4px',
},

}));