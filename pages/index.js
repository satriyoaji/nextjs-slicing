import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ResponsiveAppBar from "../components/molecules/appbar";
import {Grid, Typography, Box } from "@mui/material";


export default function Home() {
  return (
    <>
    <ResponsiveAppBar/>
    <Grid sx={{ bgcolor: 'black', mt:1, height: '100%', maxHeight: '200vh', py:4 }} container spacing={2}>
      <Grid item xs={8}>
        <Box sx={{ m: 0, p:4 }} >
          <div>
            <Typography sx={{color: '#ffffff'}} variant="h1" component="h2">
              We Create a Magnificent
              Digital Project to Grow
            </Typography>
            <Typography sx={{color: '#0c1f6b'}} variant="h1" component="h2">
              Your Bussines
            </Typography>
          </div>
          <div>
            <Typography sx={{color: '#ffffff', mt: 2}} variant="h5" component="h5">
              Create your product and let us be the part of your busssines journey
              to build your own product , we’re really experience with our field
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <div>
          IMAGES CONTENT
        </div>
      </Grid>
      <Grid item xs={12} sx={{color: '#ffffff', mt: 2}}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
          <Grid item xs={4}>
            <div>Card</div>
          </Grid>
          <Grid item xs={4}>
            <div>Card</div>
          </Grid>
          <Grid item xs={4}>
            <div>Card</div>
          </Grid>
          <Grid item xs={4}>
            <div>Card</div>
          </Grid>
          <Grid item xs={4}>
            <div>Card</div>
          </Grid>
          <Grid item xs={4}>
            <div>Card</div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
