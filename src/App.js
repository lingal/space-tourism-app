import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage, CrewPage, DestinationPage, TechnologyPage } from './pages';
import { ThemeProvider } from 'styled-components';
import { Header, Sidebar } from './components';
import {theme} from './components/styles/theme';
import GlobalStyles from './components/styles/Global';
import homeDesktop from './assets/home/background-home-desktop.jpg';
import homeTablet from './assets/home/background-home-tablet.jpg';
import homeMobile from './assets/home/background-home-mobile.jpg';
import crewDesktop from './assets/crew/background-crew-desktop.jpg';
import crewTablet from './assets/crew/background-crew-tablet.jpg';
import crewMobile from './assets/crew/background-crew-mobile.jpg';
import destinationDesktop from './assets/destination/background-destination-desktop.jpg';
import destinationTablet from './assets/destination/background-destination-tablet.jpg';
import destinationmobile from './assets/destination/background-destination-mobile.jpg';
import technologyBg from './assets/technology/background-technology-desktop.jpg';
import './App.css';

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
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          bg={backgroundImages[screen][location ? location : 'home']}
        />
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
