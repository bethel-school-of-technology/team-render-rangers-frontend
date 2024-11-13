import React from 'react';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Profile />}>
        {/* <Route index element={<SmallList />} /> 
        <Route path="about" element={<About />} />
        <Route path="products" element={<ListOfProducts/> } /> 
        <Route path=":filter/search" element={<Search />} /> 
        <Route path="new" element={<ProductForm />} /> 
        <Route path=":id" element={<Product/>} /> 
        <Route path=":id/edit" element={<ProductForm/>} />  */}
      </Route>
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> 
    </Routes>
    </BrowserRouter>


  );
}

export default App;


// FINAL PROJECT

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CreateRecipe from './pages/CreateRecipe';
// import Feed from './pages/Feed'; 
// import LogOut from './pages/LogOut';
// import Profile from './pages/Profile';
// import RecipeDetails from './pages/RecipeDetails'; 
// import Search from './pages/Search';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';


// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<SignIn />}>
//         <Route path="Feed" element={<Feed />} />
//         <Route path="Search" element={<Search/> } /> 
//         <Route path="CreateRecipe" element={<CreateRecipe />} /> 
//         <Route path="Profile" element={<Profile />} /> 
//         <Route path="LogOut" element={<LogOut/>} /> 
//       </Route>
//       <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> 
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;






// REACT MODULE CODE:

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home />}>
//         <Route index element={<SmallList />} /> 
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<ListOfProducts/> } /> 
//         <Route path=":filter/search" element={<Search />} /> 
//         <Route path="new" element={<ProductForm />} /> 
//         <Route path=":id" element={<Product/>} /> 
//         <Route path=":id/edit" element={<ProductForm/>} /> 
//       </Route>
//       <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> 
//     </Routes>
//     </BrowserRouter>


//   );
// }

// export default App;



// ORIGINAL DEFAULT CODE:

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
