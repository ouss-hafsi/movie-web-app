import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {ImPlay3} from 'react-icons/im'


import ListGroup from 'react-bootstrap/ListGroup';

import { useState } from 'react';

const MovieDescription = ({movie}) => {


    const urlA = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const [a, setA] = useState(urlA)
    return (
        <>






{/* 
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
         </div> */}

         <div className='discription-box'>


{/* <Container> */}
  <Card className='ok' style={{ width: '18rem'}}>
      <Card.Img variant="top"  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <Card.Body>
        <Card.Title className='desc-title'>{movie.title}{movie.name}</Card.Title>
        <Card.Text className='release-date'>
        {movie.release_date}
        </Card.Text>
        <Card.Text className='description'>
        {movie.overview}
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body>
        <Card.Link className='trailer' href="#">Watch Trailer</Card.Link>
      </Card.Body>
    </Card>

{/* </Container> */}
         </div>
        </>
    )
}

export default MovieDescription;


