import React from 'react';
import { Box, Grid } from '@mui/material';
import { Sidebar } from './components/Sidebar';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const mdTheme = createTheme();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  height: '90vh',
  margin: theme.spacing(2),
  spacing: 2
}));

export const App = () => (
  <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <GridContainer container>
        <Grid item xs={12}>
          <Item style={{ height: '90%' }}>Configurador</Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{ height: '100%', alignItems: 'center' }}><p>Visor</p></Item>
        </Grid>
      </GridContainer>
    </Box>
  </ThemeProvider>
);
