import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

type Props = {
  drawerCB: Function;
};
const NavigationBar: React.FunctionComponent<Props> = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon onClick={props.drawerCB(true)}/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Title Placeholder
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    </Fragment>
  );
}

export default NavigationBar;
