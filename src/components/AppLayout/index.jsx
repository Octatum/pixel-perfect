import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import './index.css';
import Navbar from '../Navbar';
import { globalTheme } from '../../utils/themes';

export const FullpageContext = React.createContext(null);

const Layout = ({ children }) => {
  const [fullpageApi, setFullpageApi] = useState(null);

  return (
    <ThemeProvider theme={globalTheme}>
      <FullpageContext.Provider value={[fullpageApi, setFullpageApi]}>
        <React.Fragment>
          <Helmet
            titleTemplate={`%s - Pixel Perfect VFX`}
            link={[
              {
                rel: 'shortcut icon',
                href: '/favicon.ico',
                type: 'image/x-icon',
              },
              {
                rel: 'icon',
                href: '/favicon.ico',
                type: 'image/x-icon',
              },
            ]}
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <Navbar />
          {children}
        </React.Fragment>
      </FullpageContext.Provider>
    </ThemeProvider>
  );
};
export default Layout;
