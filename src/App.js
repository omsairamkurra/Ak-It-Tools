import React, { useState } from 'react'
import './App.css';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';
import TokenGenerator from './sidebar/Crypto/Token-Generator/token-generator';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './header/About/about';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const body = document.body;
    if (isDarkTheme) {
      body.classList.remove("dark-theme");
    } else {
      body.classList.add("dark-theme");
    }
  };


  return (
    <Router>
      <div className="App">
        <Header
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          {isSidebarOpen && (
            <Sidebar
              toggleSidebar={toggleSidebar}
              isDarkTheme={isDarkTheme}
            />
          )}
        </div>

        {/* Display the selected component */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Crypto */}
            <Route path="/token-generator" element={<TokenGenerator />} />
            {/* <Route path="/hash-generator"  } />
            <Route path="/bcrypt"  } />
            <Route path="/uuid's-generator"  } />
            <Route path="/ulid-generator"  } />
            <Route path="/encrypt-decrypt-text"  } />
            <Route path="/bip39-passphrase-generator"  } />
            <Route path="/hmac-generator"  } />
            <Route path="/rsa-key-pair-generator"  } />
            <Route path="/password-strength-analyser"  } />
            <Route path="/pdf-sign-checker"  } /> */}
            {/* Converter */}
            {/* <Route path="/date-time-converter"  } />
            <Route path="/integer-base-converter"  } />
            <Route path="/roman-numeral-converter"  } />
            <Route path="/base64-string-encoder-decoder"  } />
            <Route path="/base64-file-converter"  } /> */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;