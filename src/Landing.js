import {Link}  from 'react-router-dom'





const Landing = ({handleChange, handleSubmit}) => {


    return (
        <>
        <div className='welcome-page'>

       <form onSubmit={handleSubmit} className='form-welcome'>
           <p> Write your name below to welcome you</p>
           <input type='text' id='username' onChange={(event) => handleChange(event)}/>
           <button type='submit'>submit</button>
        </form>

        </div>
      
          
       
        </>
    )
}

export default Landing;