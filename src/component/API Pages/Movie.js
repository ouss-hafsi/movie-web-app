import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {GoStar} from "react-icons/go";
import {BsPlusCircle} from 'react-icons/bs'


const Movie =({movie, handleUpdate}) => {

    const [disabled, setDisabled] = useState(false)
    
    
    function doubleCheck() {
    const chosenMovie = localStorage.getItem('movies')
    const moviesArr = JSON.parse(chosenMovie) 
        console.log('DoubleCheck Here!!')
    if(moviesArr ) {
        console.log('movieArr', moviesArr)
        const checkMovie = moviesArr.find(movies => movies.id === movie.id) 
        console.log('check Movie', checkMovie)
        if (checkMovie) {
            return setDisabled(true)
        } 
    }

}

useEffect(() =>{
    doubleCheck()
},[])

    
    return (
        <>
    <div  className='movies-display' key={movie.id}>
              <div>
                <img className='movies-image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <div className='name-rate'>
                <p className='title'>{movie.name}{movie.title}</p>
                <p className='rate'><GoStar/>{movie.vote_average}</p>
                </div>
              
               </div>
             <Link to={`/details/${movie.id}`} >
            <button className='read-more-btn'>Read More</button>
            </Link>
        
            <button disabled={disabled} className={`${disabled ? 'add-fav-btn-1' : 'add-fav-btn' }`}  onClick={(id) => {
                handleUpdate(movie.id)
                doubleCheck()
            }}>{disabled ? 'Added to favorite' :  'Add to favorite' }</button>
          
    </div>
        </>
    )
}

export default Movie;