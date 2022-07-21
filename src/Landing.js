import {Link}  from 'react-router-dom'
import logo from './images/logo.png'





const Landing = ({handleChange, handleSubmit}) => {


    return (
        <>
        <div className='welcome-page'>
      <img src={logo} className='logo-dark-mode'/>
      <h2 className='hello'>Hello!</h2>
      <p className='landing-text'>Please write your name below to welcome you!</p>
       <form onSubmit={handleSubmit} className='form-welcome'>
          
           <input type='text' id='username' placeholder='write your name' onChange={(event) => handleChange(event)}/>
           <button type='submit'>submit</button>
        </form>

        </div>
      
          
       
        </>
    )
}

export default Landing;