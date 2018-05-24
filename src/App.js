import React, { Fragment } from 'react';
import { Router } from 'react-static';
import { ThemeProvider } from 'styled-components';
import StyleReset from './components/StyleReset';
import { hot } from 'react-hot-loader'

import Routes from 'react-static-routes';

import Navbar from './components/Navbar';

import { globalTheme } from './styles/themes';

const App = () => (
  <Router>    
    <ThemeProvider theme={globalTheme}>
      <Fragment>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700" rel="stylesheet" />
        <Navbar />
        <Routes />
      </Fragment>
    </ThemeProvider>
  </Router>
);

export default hot(module)(App)

