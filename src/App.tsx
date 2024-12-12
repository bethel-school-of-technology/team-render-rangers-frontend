import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn.tsx';
import SignUp from './pages/SignUp.tsx';
import Profile from './pages/Profile.tsx';
import Feed from './pages/Feed.tsx';
import CreateRecipe from './pages/CreateRecipe.tsx';
import RecipeDetails from './pages/RecipeDetails.tsx';
import Search from './pages/Search.tsx';
import ForgotPassword from './pages/ForgotPassword.tsx';
import { RecipeProvider } from './context/RecipeContext.tsx';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext.tsx';


const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { token } = useContext(AuthContext)!;
  return token ? children : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <RecipeProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-recipe"
          element={
            <PrivateRoute>
              <CreateRecipe />
            </PrivateRoute>
          }
        />
        <Route
          path="/recipe/:recipeId" // changed this from "/recipe/:id"
          element={
            <PrivateRoute>
              <RecipeDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
      </Routes>
    </RecipeProvider>
  );
};

export default App;
