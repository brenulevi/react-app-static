import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Theme and global styles
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Navbar from './Navbar';
import ToogleTheme from './ToogleTheme';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light")
      setTheme("dark");
    else
      setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Navbar />
        <div className="fixed">
          <ToogleTheme theme={theme} themeChange={toggleTheme} />
        </div>
      </>
    </ThemeProvider>
  )
}

export default App;