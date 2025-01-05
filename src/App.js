import React, { useState } from 'react'
import './App.css';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';
import TokenGenerator from './sidebar/Token-Generator/token-generator';
import Home from './Home/Home';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null); // Track active component

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

  const handleSidebarItemClick = (componentName) => {
    setActiveComponent(componentName); // Update the active component when sidebar item is clicked
  };

  // Render components based on active component
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "tokenGenerator":
        return <TokenGenerator />;
      default:
        return <Home /> // Default placeholder
    }
  };

  return (

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
            onItemClick={handleSidebarItemClick} // Pass the function to Sidebar
          />
        )}
      </div>

      {/* Display the selected component */}
      <div className="content">
        {renderActiveComponent()}
      </div>
    </div>
  );
}

export default App;