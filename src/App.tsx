import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
