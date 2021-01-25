import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TrainTwoToneIcon from '@material-ui/icons/TrainTwoTone';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from "next/link";

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
  // drawerCB: Function;
};
const NavigationBar: React.FunctionComponent<Props> = props => {
  const classes = useStyles();
  const router = useRouter();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <AppBar>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <TrainTwoToneIcon /* onClick={props.drawerCB(true)}*/ />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Title Placeholder
            </Typography>

            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem>
                  <Link href="/">
                    <a className={router.pathname === "/" ? "active" : null}>about</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Typography variant="h6" className={classes.title}>
                    <Link href="/posts">
                      <a className={router.pathname.startsWith("/posts") ? "active" : null}>
                          blog
                      </a>
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
    </Fragment>
  );
}

export default NavigationBar;
