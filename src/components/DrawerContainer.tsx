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
const DrawerContainer: React.FunctionComponent<Props> = props => {
  const router = useRouter();
  const classes = useStyles();
  const [active, setActive] = useState(false);

  return (
    <Fragment>
      Dingle
    </Fragment>
  );
}

export default DrawerContainer;
