// import "./app.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import { cards, listSocials } from "./data";
import React, { useRef } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider, useTheme } from './ThemeContext';
import { lightTheme, darkTheme } from './theme';
import Box from '@mui/material/Box';

const AppContent = () => {
  const { theme } = useTheme();
  const appliedTheme = theme === 'light' ? lightTheme : darkTheme;

  const projectRef = useRef('project');
  const favoritesRef = useRef('favorites');
  const contactRef = useRef('contact');

  return (
    <MUIThemeProvider theme={appliedTheme}>
      <CssBaseline />

      <div>
        <Header projectRef={projectRef} favoritesRef={favoritesRef} contactRef={contactRef} />        <main>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
          </Box>
          {/* <Hero /> */}
          <Projects ref={projectRef} projects={cards} />
          <Contacts ref={contactRef} listSocials={listSocials} />
        </main>
        <Footer />
      </div>

    </MUIThemeProvider>
  );
};


function App() {

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
