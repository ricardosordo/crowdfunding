import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className="correo">
    <title>¡Mantente al tanto de nuevas campañas!</title>
   

    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="outlined-basic" label="Escribe tu correo aquí" variant="outlined" />
    </form>
    </div>
    
  );
}