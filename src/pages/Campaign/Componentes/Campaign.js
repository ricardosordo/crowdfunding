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
    
   
<div Classname="formato">
    <form className={classes.root} noValidate autoComplete="off">
        <div className="input">
    <TextField  id="outlined-basic" label="Nombre de la campaña" variant="outlined" width="100%" />
    </div>
    <div className="input">
      <TextField id="outlined-basic" label="Ubicación de la campaña" variant="outlined" />
      </div>
      <div className="input">
      <TextField id="outlined-basic" label="Categoría" variant="outlined" />
      </div>
      <div className="input">
      <TextField id="outlined-basic" label="Descripción" variant="outlined" />
      </div>
      <div className="input">
      <TextField id="outlined-basic" label="Recaudo total" variant="outlined" />
       </div>
       <div className="input">
      <TextField id="outlined-basic" label="Backers" variant="outlined" />
      </div>
      <div className="input">
      <TextField id="outlined-basic" label="Fecha de finalización de la campaña" variant="outlined" />
      </div>
      <div className="input">
      <TextField id="outlined-basic" label="Meta de recaudación" variant="outlined" />
      </div>
      <button type="button" class="button">cancelar</button>
      <button type="button" class="button">Borrar</button>
      <button type="button" class="button">Aceptar</button>
      
    </form>
    </div>
    
    
  );
}

