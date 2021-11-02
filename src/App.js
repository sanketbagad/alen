import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Routes from './Components/Routes'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
