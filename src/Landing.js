import {Link}  from 'react-router-dom'




const Landing = ({getUserChange, userClick, userInput }) => {
    return (
        <>
        Let me Welcome! Enter Your Name Below
        <input type='text' value={userInput} onChange={(event) => getUserChange(event)}/>
        <button onClick={userClick}>Continue</button>
        </>
    )
}

export default Landing;