import React from 'react'
import logo from "./download.png"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>

    <div className="border-2 border-indigo-400 
    flex items-center mt-4
    space-x-8 rounded-md
    pl-12 py-3 ml-2 mr-3
    ">
       <Link to="/"> <img src={logo} className="w-[50px]" /></Link>
       <Link to="/movies/popular" style={{textDecoration: "none"}}><span className="text-blue-300  text-2xl font-bold hover:text-white">Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span className="text-blue-300  text-2xl font-bold hover:text-white">Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span className="text-blue-300  text-2xl font-bold hover:text-white">Upcoming</span></Link>
            
    </div>
    </>
  )
}

export default Navbar
