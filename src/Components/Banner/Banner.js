import React,{useEffect,useState} from 'react'
import '../Banner/Banner.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/Constants'
 

function Banner() {
const [movie, setMovie] = useState([])


useEffect(() => {
axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[0])
    setMovie(response.data.results[1])
})
}, [])


  return (

    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}>
        <div className="content">
            <h1 className='title'>
              {movie.name}
            </h1>
            <div className="banner_button">
                <button className='button'>Play</button>
                <button className='button'>Mylist</button>
            </div>

            <h1 className='description'>{movie.overview}</h1>
        </div>
        <div className="fade_bottom">

        </div>

    </div>
  )
}

export default Banner