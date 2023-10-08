
import './App.css';
import React, { useEffect, useState } from 'react';
// import Navbar from './components/Navbar';
// import Banner from './components/Banner';
// import Movies from './components/Movies';

import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/home/home';
import MovieList from './Components/movieList/movieList';
import Movie from './pages/movieDetail/Movie';

import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
        
            <Routes>
                <Route  index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
             
            </Routes>
            <Footer/>
        </Router>
     
    </div>
  );
}

export default App;



// import TopRated from './components/TopRated';
// import Pagenotfound from './components/Pagenotfound';
// import Card from './components/Card';



// function App() {

  
  
//   return (
//     <>  

    
//     <BrowserRouter>
//     <Navbar/>
// <Routes>

// <Route path="/home" element={
//   <>
//   {<Banner/>}
// <Card/>
// {/* <Pagination/> */}

// </>
//   }></Route>

//   <Route path="/movies/:type" element={
//   <>

// <Movies/>

// {/* <Pagination/> */}

// </>
//   }></Route>
  
  
//   <Route path="/upcomings" element={
//     <>
//     <TopRated/>
//     </>
//   }>

//   </Route>
// <Route path="*" element={
//   <>
//   <Pagenotfound/>
//   </>
// }>
// </Route>

// </Routes>



//     </BrowserRouter>
   
//     </>
 

//   );
// };

// export default App;
