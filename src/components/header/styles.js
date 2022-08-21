  
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginTop:'10px',
    flexDirection:'row',
    marginLeft:'45px',

  },
  form:{
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    padding:'5px',
    border:'solid',
    width:'100px',
    marginRight:'5px',
  },

}));