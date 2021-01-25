import Head from "next/head";
import NavigationBar from "./NavigationBar";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const router = useRouter();

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
            <NavigationBar />
          </nav>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <main>{children}</main>
        </Grid>
      </Grid>
  );
}
