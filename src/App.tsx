import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import CreateRecipe from './pages/CreateRecipe';
import RecipeDetails from './pages/RecipeDetails';
import Search from './pages/Search';
import LogOut from './pages/LogOut';
import { RecipeProvider } from './context/RecipeContext';

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
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  );
};

export default App;








// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SignUp from './pages/SignUp.tsx';
// import SignIn from './pages/SignIn.tsx';
// import Profile from './pages/Profile.tsx';
// import Feed from './pages/Feed.tsx';
// import CreateRecipe from './pages/CreateRecipe.tsx';
// import RecipeDetails from './pages/RecipeDetails.tsx';
// import Search from './pages/Search.tsx';
// import LogOut from './pages/LogOut.tsx';
// import RecipeContext from './context/RecipeContext.tsx';
// import recipes from './recipe-data.ts';


// const App: React.FC = () => {
//   return (
//     <RecipeContext.Provider value={{ recipes }}>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/feed" element={<Feed />} />
//       <Route path="/create-recipe" element={<CreateRecipe />} />
//       <Route path="/recipe-details" element={<RecipeDetails />} />
//       <Route path="/search" element={<Search />} />
//       <Route path="/logout" element={<LogOut />} />
//     </Routes>
//   </BrowserRouter>
//   </RecipeContext.Provider>

//   );
// };

// export default App;
