import React from 'react'

function ReviewForm() {
  return (
    <div className='FormWrapper'>
        <div className="form">
            <form action="">
                <div className="search">
                    <input type="search" name="" id="" placeholder='Search Content Here...'/>
                </div>
                <div className="reviewTitle">
                    <input type="text" name="" id="" placeholder='Enter Review Title Here...'/>
                </div>
                <div className="reviewTxt">
                    <textarea name="" id="" cols="50" rows="25" placeholder='Type Review Here...'></textarea>
                </div>
                <div className="reviewRating">
                    <input type="number" name="" id=""/>
                </div>
                <div className="submit">
                    <input type="submit" value="Publish" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ReviewForm