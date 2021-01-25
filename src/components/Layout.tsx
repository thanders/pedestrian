import Head from "next/head";
import NavigationBar from "./NavigationBar";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Fragment, useState } from "react";

import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function Layout({ children }: Props) {
  const router = useRouter();
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  return (
    <Grid container spacing={5} xs={12}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
        <Grid container item xs={12} spacing={3}>
          <nav>
            <NavigationBar drawerCB={(drawerStatus) => toggleDrawer('left', drawerStatus)} />
          </nav>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <main>{children}</main>
          <style jsx>
        {`
        `}
      </style>
        </Grid>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>about</a>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                  blog
              </a>
            </Link>
          </Typography>
        </Drawer>
      </Grid>
  );
}
