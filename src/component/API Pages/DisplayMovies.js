import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Movie from './Movie';
import MovieDescription from './MovieDescription';
import Search from './Search';



const DisplayMovies = ({movies, setMovies, getData}) => {

const [query, setQuery] = useState('')
const [favoriteMovies, setFavoriteMovies] = useState([])

    
    useEffect(() =>{
        getData()
        console.log('useeffect is called here!!')
    },[]) 

function handleChange(event){
setQuery(event.target.value)


}

function capitalizeInputValue(string) {
   string = string.toLowerCase().split(' ');
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() +
    string[i].substring(1);
  }
  return string.join(' ');
}


function handleUpdate (id) {
  const findMovie = movies.find(movie => movie.id === id)
  if(localStorage.getItem('movies')) {
        // if movies not empty push the new element
      const chosenMovie = localStorage.getItem('movies')
      const moviesArr = JSON.parse(chosenMovie)
      moviesArr.push(findMovie)
      localStorage.setItem('movies', JSON.stringify(moviesArr))

  } else {
      // else if empty create a new array with the first elemenet
      localStorage.setItem('movies',JSON.stringify([findMovie]))
      }
       setFavoriteMovies(findMovie)

}



function handleClick () {

const filterMovies = movies.filter((movie) =>{
  const searchVal = capitalizeInputValue(query)
 if (movie.title) {
    return movie.title.includes(searchVal)
 } else if (movie.name){
   return  movie.name.includes(searchVal)
 } else {
    return false
 }

})

setMovies(filterMovies)   

}




if (!movies) {
        return <p>Loading  information ...</p>
   }
    return (
<>
    <Search  handleClick={handleClick} handleChange={handleChange} />

    <div className='movies-list'>

       {movies.map((movie) => {

         return (
           <Movie movie={movie} key={movie.id}  handleUpdate={handleUpdate}/>
          
              )
          })}

    </div>
    


</>
    )
}

export default DisplayMovies;



