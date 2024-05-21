import React from 'react'
import ReviewForm from '../components/ReviewForm'
import Navbar from '../components/Navbar'

function Create() {
  return (
    <div>
      <Navbar />
      <p className='createPageTitle'>Create Review</p>
      <div className="form">
        <ReviewForm />
      </div>
    </div>
  )
}

export default Create