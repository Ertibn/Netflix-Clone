import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header-container'> 
        <div className='header-left'>
          <ul>
            {/* <li>
              <img src='#' alt=''/>
            </li> */}
            <li>Netflix</li>
            <li>Home </li>
            <li>TVShows </li>
            <li>Movies </li>
            <li>Latest</li>
            <li>MyList </li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        {/* <div>
          <ul>
            <li>search</li>
          </ul>
        </div> */}
      </div>

    </div>
  )
}

export default Header