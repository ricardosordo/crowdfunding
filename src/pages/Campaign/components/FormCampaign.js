import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import '../Campaign.css';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 360,
    },
  },
}));

export default function FormCampaign(props) {

    const classes = useStyles();

    const {createCampaign} = props;

    const [titulo, setTitulo] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [recaudado, setRecaudado] = useState('');
    const [bakrs, setBakrs] = useState('');
    const [disponible, setDisponible] = useState('');


    const handlerTitle = (e) => {
    setTitulo(e.target.value)
  }
  const handlerUbicacion = (e) => {
    setUbicacion(e.target.value)
  }
  const handlerCategoria = (e) => {
    setCategoria(e.target.value)
  }
  const handlerDescripcion = (e) => {
    setDescripcion(e.target.value)
  }
  const handlerRecaudado = (e) => {
    setRecaudado(e.target.value)
  }
  const handlerBakrs = (e) => {
    setBakrs(e.target.value)
  }

  const handlerDisponible = (e) => {
    setDisponible(e.target.value)
  }

  return (


<div className="inputFields">
    <form className={classes.root} noValidate autoComplete="off">
        <div className="input">
    <TextField type="text"  id="outlined-basic" label="Nombre de la campaña" variant="outlined" size="Normal" onChange={handlerTitle} />
    </div>
    <div className="input">
      <TextField type="text" id="outlined-basic" label="Ubicación de la campaña" variant="outlined" onChange={handlerUbicacion}/>
      </div>
      <div className="input">
      <TextField type="text" id="outlined-basic" label="Categoría" variant="outlined" onChange={handlerCategoria}/>
      </div>
      <div className="input">
      <TextField type="text" id="outlined-basic" label="Descripción" variant="outlined" onChange={handlerDescripcion} />
      </div>
      <div className="input">
      <TextField type="text" id="outlined-basic" label="Recaudo total" variant="outlined" onChange={handlerRecaudado}/>
       </div>
       <div className="input">
      <TextField type="text" id="outlined-basic" label="Backers" variant="outlined" onChange={handlerBakrs}/>
      </div>
      <div className="input">
      <TextField type="text" id="outlined-basic" label="Fecha de finalización de la campaña" variant="outlined" onChange={handlerDisponible} />
      </div>
      <div className="input">
      <TextField type="text" id="outlined-basic" label="Meta de recaudación" variant="outlined" />
      </div>
      {/* <button type="button" className="button">Cancelar</button>
      <button type="button" className="button">Borrar</button> */}
      <Link to="/">
      <button type="button" className="button" onClick={() => createCampaign(titulo, ubicacion, categoria, descripcion, recaudado, bakrs, disponible)} >Guardar</button>
      </Link>
    </form>
    </div>
  );
}