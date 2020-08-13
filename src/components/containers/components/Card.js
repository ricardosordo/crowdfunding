import React from 'react';
import './Card.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    marginLeft: 50,
  },
  media: {
    height: 200,
    
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/50707/cocoa-man-colombia-peasant-50707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ¡Apoya a los caficultures colombianos en el aréa del quindio!
          </Typography>
          <div className="Padre">
          <div className="hijo" gutterBottom variant="h5" component="h2">
            Ubicacion    |      Categoría 
          </div>
          
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <div className="contenedor">
          <div className="chijo">
                <Typography><b>$478.000 COP</b></Typography >
                <Typography > recaudaciones </Typography >
              </div>
              <div className="chijo">
                <Typography ><b>26</b></Typography >
                <Typography > Bakrs </Typography >
              </div>

              <div  className="chijo">
                <Typography ><b>26 días</b></Typography >
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
  );
}

