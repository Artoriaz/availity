import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '500px',
    height: '500px',
  },
});

const cardHOC = WrappedComponent => () => {
    const classes = useStyles();
      return (
        <Card className={classes.root}>
        <CardContent>
          <WrappedComponent/>
        </CardContent>
      </Card>
      );
  }




export default cardHOC;