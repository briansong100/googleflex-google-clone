import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Routers} from './components/Routers'
import { useState } from 'react';
function App() {
  const [darkTheme, setDarkTheme] =useState(false )
  return (
    // tailwind.config.js ->  add darkMode: 'class',
    <div className={ darkTheme? "dark":"" } >
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 ">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routers />
        <Footer />
      </div>
  </div>
  );
}

export default App;
