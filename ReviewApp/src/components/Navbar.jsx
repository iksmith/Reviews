import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="navBar">
            <div className="pageName">
                <a className="homeLink" href="/">Retro Reviews</a>
            </div>
            <div className="navLinks">
                <div className="Create">
                    <a href="/create">
                        <button className='createBtn'>Create</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar