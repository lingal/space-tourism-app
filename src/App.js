import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage, CrewPage, DestinationPage, TechnologyPage } from './pages';
import { ThemeProvider } from 'styled-components';
import { SharedLayout } from './pages/';
import { Sidebar } from './components';
import { theme } from './components/styles/theme';
import GlobalStyles from './components/styles/Global';
import { SidebarContext } from './utils/Context';

import {
  homeDesktop,
  homeTablet,
  homeMobile,
  crewDesktop,
  crewTablet,
  crewMobile,
  destinationDesktop,
  destinationTablet,
  destinationmobile,
  technologyBg
} from './assets';

const backgroundImages = {
  desktop: {
    home: homeDesktop,
    crew: crewDesktop,
    destination: destinationDesktop,
    technology: technologyBg
  },
  tablet: {
    home: homeTablet,
    crew: crewTablet,
    destination: destinationTablet,
    technology: technologyBg
  },
  mobile: {
    home: homeMobile,
    crew: crewMobile,
    destination: destinationmobile,
    technology: technologyBg
  }
};

function App() {
  const [size, setSize] = useState(window.innerWidth);
  const [screen, setScreen] = useState('mobile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation().pathname.slice(1);

  const getWindowSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    const handleScreenType = () => {
      if (size < 520) {
        return setScreen('mobile');
      }
      if (size > 520 && size < 1000) {
        return setScreen('tablet');
      }

      return setScreen('desktop');
    };

    handleScreenType();

    window.addEventListener('resize', getWindowSize);

    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, [size]);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          bg={backgroundImages[screen][location ? location : 'home']}
        />
        <Sidebar />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/crew" element={<CrewPage />} />
            <Route
              path="/technology"
              element={
                <TechnologyPage data={screen !== 'desktop' ? true : false} />
              }
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </SidebarContext.Provider>
  );
}

export default App;
