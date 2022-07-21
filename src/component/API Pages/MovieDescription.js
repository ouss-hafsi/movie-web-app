import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {ImPlay3} from 'react-icons/im'



import { useState } from 'react';

const MovieDescription = ({movie}) => {


    const urlA = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const [a, setA] = useState(urlA)
    return (
        <>







         <div className='container-block'>
            <div className='container-description'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <div className='block-description'>
                <p className='title-Description'>{movie.title}</p>    
                <p>Release Date<br/><span>{movie.release_date}</span></p>
                <p>Description<br/><span>{movie.overview}</span></p>
                <button><ImPlay3/> Watch Trailer</button>
                </div>
              
            </div>
         </div>


           


  
        </>
    )
}

export default MovieDescription;


