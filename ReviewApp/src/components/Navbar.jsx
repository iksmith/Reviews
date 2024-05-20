import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="navBar">
            <div className="pageName">
                Retro Reviews
            </div>
            <div className="navLinks">
                <div className="Create">
                    <a href="/create">
                        <button>Create</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar