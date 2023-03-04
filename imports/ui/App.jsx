import React from 'react';
import { Box, Grid } from '@mui/material';
import { Sidebar } from './components/Sidebar';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Config } from './components/Configuration';

//const mdTheme = createTheme();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: '1vh'
  //height: '10%',
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  //height: '50vh',
  margin: theme.spacing(2),
  //spacing: 2 // set spacing to 0
}));


export const App = () => (
  <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <GridContainer container>
        <Grid item xs={12}>
          <Item style={{ height: '30vh' }}><Config /></Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{ height: '55vh', alignItems: 'center' }}><p>Visor</p></Item>
        </Grid>
      </GridContainer>
    </Box>
  </ThemeProvider>
);
