import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import PropTypes from 'prop-types';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import Box from '@material-ui/core/Box';
import '../../Home/Home.css'

const useStyles = makeStyles((theme)=> ({
  root: {
    maxWidth: 350,
    marginLeft: 50,
  },
  media: {
    height: 300,
  },
  paper:{
    padding: theme.spacing(2),
    margin: 'auto',
  },
}));

export default function Card1(props) {

  const classes = useStyles();
  const {imagen, titulo, ubicacion, categoria, descripcion, recaudado, bakrs, disponible} = props;

  return (
    <div className="paddingCards">
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/50707/cocoa-man-colombia-peasant-50707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterbottom="true" variant="h5" component="h2">
            {titulo}
          </Typography>
          <div className="Padre">
          <div className="hijo" gutterbottom="true" variant="h5" component="h2">
            {ubicacion}   |   {categoria}
          </div>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {descripcion}
          </Typography>
          <div className="contenedor">
          <div className="chijo">
                <Typography><b>${recaudado} COP</b></Typography >
                <Typography > recaudaciones </Typography >
              </div>
              <div className="chijo">
                <Typography ><b>{bakrs}</b></Typography >
                <Typography > Bakrs </Typography >
              </div>

              <div  className="chijo">
                <Typography ><b>{disponible} días</b></Typography >
                <Typography > termina</Typography >
              </div>
          </div>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Conoce más
        </Button>
        <a href="#" class="btn btn-primary">¡Apoya este proyecto!</a>
      </CardActions>
    </Card>
    </div>
  );
}


