
import './App.css';
import './App-Responsive.css';
import {Routes, Route, useLocation, useNavigate, Navigate} from 'react-router-dom'
import { useEffect, useState } from 'react';



   // import pages
   import Navigation from './component//Pages & nav/Navigation';
   import Home from './component//Pages & nav/Home';
   import About from './component//Pages & nav/About';
   import Contact from './component/Pages & nav/Contact';
   import DisplayMovies from './component/API Pages/DisplayMovies';
   import MovieDetails from './component/API Pages/MovieDetails';
   import Favorite from './component/API Pages/Favorite';
   import Landing from './Landing';



function App() {
 
const init ={
  username: ''
}

const navigate = useNavigate();
const [user, setUser] = useState(init)
const [movies, setMovies] = useState([])
const location = useLocation()
// console.log(location.pathname === '/' )

function handleChange (event) {
  setUser({...user, [event.target.id]: event.target.value }) 
  
}  

function handleSubmit (event) {
event.preventDefault()
localStorage.setItem('user', JSON.stringify(user))

console.log('this is user from app.js', user)
navigate('/home');
}


const getMovie = {
  key: process.env.REACT_APP_KEY,
  // limit: 10,
  // rating: 'G',
  api: 'https://api.themoviedb.org/3',
  endpoint: '/trending/all/day?api_key='
};

function getData() {
  const url =`${getMovie.api}${getMovie.endpoint}${getMovie.key}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let newData = data.results
      // console.log(data)
      setMovies(newData)
    
  })
    .catch(console.error);
}  

return (
    <>


{/* <header>
  {location.pathname === '/' ? 
   <Routes><Route path='/' element={<Landing handleChange={handleChange} handleSubmit={handleSubmit}/>}/></Routes> 
   : <Navigation getData={getData}/> }
   
</header> */}
{location.pathname !== '/' ? <Navigation getData={getData}/> : null}


<main>

  <Routes>
<Route path='/' element={<Landing handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
<Route path='/home' element={<Home />}/>
<Route path='/About' element={<About/>}/>
<Route path='/Movies' element={<DisplayMovies movies={movies} getData={getData} setMovies={setMovies} />}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/details/:id' element={<MovieDetails movies={movies}/>}/>
<Route path='/favorite' element={<Favorite/>}/>

  </Routes>

</main>
 

  
    </>
  );
}

export default App;
