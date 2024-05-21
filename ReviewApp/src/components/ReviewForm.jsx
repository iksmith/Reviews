import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ReviewForm() {

    const [animeTitle, setAnimeTitle] = useState('');
    const [animeCover, setAnimeCover] = useState('');
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [reviewRating, setReviewRating] = useState(0);
    

    const getAnime = async () => {
        const anime = await axios.get('https://api.jikan.moe/v4/anime?q=naruto&limit=5')
        console.log(anime.data.data)
    }
    useEffect(() => {
        getAnime()
    }, [])

  return (
    <div className='FormWrapper'>
        <div className="form">
            <form action="">
                <div className="search">
                    <input type="search" name="" id="" placeholder='Search Content Here...'/>
                    <button className='searcgBtn'>Search</button>
                </div>
                <div className="reviewTitle">
                    <input type="text" name="" id="" placeholder='Enter Review Title Here...'/>
                </div>
                <div className="reviewTxt">
                    <textarea name="" id="" cols="42" rows="25" placeholder='Type Review Here...'></textarea>
                </div>
                <div className="reviewRating">
                    <input type="number" name="" id=""/>
                </div>
                <div className="submit">
                    <input type="submit" value="Post" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ReviewForm