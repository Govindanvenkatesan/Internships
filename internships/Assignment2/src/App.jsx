import React from 'react';
// import Products from './MainFolder/components/Products/Products';
// import NavBar from './MainFolder/components/NavBarSection/NavBar';
// import SearchBar from './MainFolder/components/NavBarSection/Searchbar';
import Login from './MainFolder/components/Login/Login'; // Import the Login component
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div>
      {/* <SearchBar className="search-bar" />
      <NavBar className="navbar" />
      <Products className="products-container" /> */}
      <Login />
    </div>
  );
};

export default App;