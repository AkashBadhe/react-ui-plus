import React from 'react';
import { Button } from 'react-ui-plus'
import { makeStyles } from '@material-ui/core/styles';

export default {
  title: 'MyComponent',
};
const useStyles = makeStyles(theme => ({
  root: {
    '& button': {
      marginRight: '20px'
    }
  },
}));
export const buttons = () => {
  const classes = useStyles();
  return <div className={classes.root}>
    <Button variant="contained">Default</Button>
    <Button variant="contained" color="primary">
      Primary
      </Button>
    <Button variant="contained" color="secondary">
      Secondary
      </Button>
    <Button variant="contained" disabled>
      Disabled
      </Button>
    <Button variant="contained" color="primary" href="#contained-buttons">
      Link
      </Button>
  </div>

}
