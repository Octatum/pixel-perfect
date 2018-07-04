import React, { Fragment } from 'react';
import { Router } from 'react-static';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes';

import Navbar from './components/Navbar';
import StyleReset from './components/StyleReset';
import { globalTheme } from './styles/themes';
import imports from './imports.css';
import AnimatedRoutes from './components/AnimatedRoutes';
import _ from './styles/AppStyles';

const App = () => (
  <Router>
    <ThemeProvider theme={globalTheme}>
      <Fragment>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
        <Navbar />
        <Routes component={AnimatedRoutes}/>
      </Fragment>
    </ThemeProvider>
  </Router>
);

export default App
