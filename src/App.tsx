import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp.tsx';
import SignIn from './pages/SignIn.tsx';
import Profile from './pages/Profile.tsx';
import Feed from './pages/Feed.tsx';
import CreateRecipe from './pages/CreateRecipe.tsx';
import RecipeDetails from './pages/RecipeDetails.tsx';
import Search from './pages/Search.tsx';
import ForgotPassword from './pages/ForgotPassword.tsx';
import { RecipeProvider } from './context/RecipeContext.tsx';

const App: React.FC = () => {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Dynamic Route */}
          <Route path="/search" element={<Search />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  );
};

export default App;

