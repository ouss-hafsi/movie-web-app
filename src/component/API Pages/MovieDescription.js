import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



import { useState } from 'react';

const MovieDescription = ({movie}) => {


    const urlA = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const [a, setA] = useState(urlA)
    return (
        <>







         <div className='container'>
            <div className='container-description'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <div>
                <p>title<br/>{movie.title}</p>    
             
                <p>release date<br/>{movie.release_date}</p>
                <p>description<br/>{movie.overview}</p>
                <button>See Trailer</button>
                </div>
              
            </div>
         </div>


           


  
        </>
    )
}

export default MovieDescription;


