import React from 'react';
import './App.css';
import SignUp from './pages/SignUp.tsx';
import SignIn from './pages/SignIn.tsx';
import Profile from './pages/Profile.tsx';
import Feed from './pages/Feed.tsx';
import CreateRecipe from './pages/CreateRecipe.tsx';
import RecipeDetails from './pages/RecipeDetails.tsx';
import Search from './pages/Search.tsx';
import LogOut from './pages/LogOut.tsx';

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
