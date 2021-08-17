import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Movie({movie}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{margin:"2%"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movie.image}
          style={{height:"600px"}}
          
        />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
              {movie.type}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" >
              {movie.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Date of release: {movie.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <Rating name="read-only" value={movie.rating} readOnly />
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}