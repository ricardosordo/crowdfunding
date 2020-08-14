import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../../Home/Home.css'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Correo() {
  const classes = useStyles();

  return (
    <div className="correo">
    <h3>¡Mantente al tanto de nuevas campañas!</h3>
   
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="outlined-basic" label="Escribe tu correo aquí" variant="outlined" />
    </form>
    </div>
    
  );
}


