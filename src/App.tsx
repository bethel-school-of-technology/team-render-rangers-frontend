import React from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import CreateRecipe from './pages/CreateRecipe';
import RecipeDetails from './pages/RecipeDetails';
import Search from './pages/Search';
import LogOut from './pages/LogOut';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <SignUp />
        <SignIn />
        <Profile />
        <Feed />
        <CreateRecipe />
        <RecipeDetails />
        <Search />
        <LogOut />
      </main>
    </div>
  );
}

export default App;
