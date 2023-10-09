import React from 'react'
import logo from "./download.png"
import {Link} from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <>

    <div className=" custom-navbar border-2 border-indigo-400 
    flex items-center mt-4
    flex-wrap sm:flex-nowrap  // New class to wrap items on small screens
    space-x-8 rounded-md
    pl-2 pr-3 py-3
    sm:pl-12 sm:py-3 sm:ml-2 sm:mr-3
    ">
       <Link to="/" > <img src={logo} className="w-[50px]" /></Link>
       <Link to="/movies/popular" style={{textDecoration: "none"}}><span className="text-blue-300  text-2xl font-bold hover:text-white sm:flex space-x-8">Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span className="text-blue-300  text-2xl font-bold  sm:flex space-x-8  flex-grow hover:text-white">Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span className="text-blue-300  text-2xl font-bold hover:text-white sm:flex space-x-8  flex-grow">Upcoming</span></Link>
            
    </div>
    </>
  )
}

export default Navbar
