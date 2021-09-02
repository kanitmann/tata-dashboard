import React from 'react';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import img from "../Assets/Reactjs.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const largeCard = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
export default function Cards() {
  const classes = largeCard();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {img}
          title="ReactJS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sample Job Opportunity
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Vestibulum nisl felis, rutrum nec molestie sed, cursus eu urna. Vestibulum ultricies, mauris ut tempus facilisis, mi risus placerat dui, nec malesuada lectus felis ac metus. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" size="small" color="inherit">
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}