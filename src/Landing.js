import {Link}  from 'react-router-dom'
import logo from './images/logo.png'





const Landing = ({handleChange, handleSubmit}) => {


    return (
        <>
        <div className='welcome-page'>
      <img src={logo} className='logo-dark-mode'/>
       <form onSubmit={handleSubmit} className='form-welcome'>
           <p> Write your name below to welcome you</p>
           <input type='text' id='username' placeholder='write your name' onChange={(event) => handleChange(event)}/>
           <button type='submit'>submit</button>
        </form>

        </div>
      
          
       
        </>
    )
}

export default Landing;