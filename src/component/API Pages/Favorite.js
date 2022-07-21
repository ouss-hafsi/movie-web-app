import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Favorite = () => {
      // get data from local storage 
     // parse data  

     const chosenMovie = localStorage.getItem('movies')
     const moviesArr = JSON.parse(chosenMovie) 
     const [_, setLocalState] = useState(moviesArr)
     

function removeMovie(id) {
        const deleteMovie = moviesArr.find(movie => movie.id === id)
        // console.log(deleteMovie)
        let arr =[]
     
      
        for (let i = 0; i <= moviesArr.length - 1; i++) {
            if (moviesArr[i].id !== deleteMovie.id) {
                // console.log(moviesArr[i].id)
                // console.log(deleteMovie.id)
                arr.push(moviesArr[i])
                // console.log(moviesArr)
             }
        }  

           localStorage.setItem('movies', JSON.stringify(arr))
           if(arr.length < 1) {
              localStorage.clear();   
            }

            setLocalState(arr)
    }
    
function deleteAll() {
      localStorage.clear();
       setLocalState([])
    }

     if(!moviesArr) {
        return <p className='nothing-yet'>You didn't add anything yet</p>
     }
  
    return (
        <>
<div className='fav-container'>  



  <Container>
  <Row xs={1} md={4} lg={4} xl={4} className='g-4'>
  <button className='fav-clear' onClick={deleteAll}>Delete all</button>  
  </Row>
    <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
    
    {moviesArr.map((movie,index) => {
            return(
     <Col key={index}>
            <Card className='fav-card h-100'  >
                {movie.poster_path && (
               <Card.Img
                variant='top'
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''}
                alt={movie.title}
            />
        )}
        <Card.Body>
            {movie.poster_path ? (
                ''
            ) : (
                <Card.Title>No Image Available</Card.Title>
            )}
            <Card.Text className='fav-text'>{movie.title}{movie.name}</Card.Text>
        </Card.Body>

        <Card.Footer>
		   <Button className='fav-button' onClick={()=> {removeMovie(movie.id)}} variant='outline-dark'>
					Remove
			</Button>
		</Card.Footer>
    </Card>
</Col>
        
            )
        })}
        
        
        </Row>  

    </Container>

 </div>



 

        </>
    )
}

export default Favorite;