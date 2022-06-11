import React from 'react'
import './header.css'
import { signInWithGoogle } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
const Header = (props) => {
   
    //  Promise and catch
  return (
    <nav className='fixed h-1/6 w-full gradient top-0 left-0 right-0 flex justify-between items-center px-9 tracking-widest'>
        <img src="/../images/logo.svg" alt="logo"  className=' h-2/4 '/>
        <div className="flex nav-menu items-center flex-nowrap h-full justify-end relative gap-5">
                {/* <Route path='/home' element={<Login></Login>}>Home</Route> */}
            <a href="/home" className='flex items-center'>
                <img src="/../images/home-icon.svg" alt="Home" className='w-8'/>
                <span>Home</span>
            </a>
            <a href="/search" className='flex items-center'>
                <img src="/../images/search-icon.svg" alt="Search" className='w-8'/>
                <span>Search</span>
            </a>
            <a href="/watchlist" className='flex items-center'>
                <img src="/../images/watchlist-icon.svg" alt="watchlist" className='w-8'/>
                <span>Watchlist</span>
            </a>
            <a href="/orginals" className='flex items-center'>
                <img src="/../images/original-icon.svg" alt="original" className='w-8'/>
                <span>Originals</span>
            </a>
            <a href="/movies" className='flex items-center'>
                <img src="/../images/movie-icon.svg" alt="Movie" className='w-8'/>
                <span>Movies</span>
            </a>
            <a href="/series" className='flex items-center'>
                <img src="/../images/series-icon.svg" alt="Series" className='w-8'/>
                <span>Series</span>
            </a>
        </div>
        <button className='button border-2 px-4 py-3 rounded tracking-widest hover:shadow-inner' onClick={signInWithGoogle}>Login</button>
    </nav>
  )
//   onClick={signInWithGoogle}
}
export default Header