///////Navigation.js
import React from 'react';
import { useEffect } from 'react';
const Home = () => {
    const getUser = localStorage.getItem('user')
    const userParse = JSON.parse(getUser)
    console.log(getUser)
    // useEffect(() => {
    //     getUser
    // },[])

// if(!getUser) {
//     return <p> still loading</p>
// }



    return (
      
<div className='home-box'>
	
    <div className="presentation-block">
        <div>

        <p className="hi-home">Welcome!</p>
        <p className='user-name'>{userParse.username}</p>
        </div>
     
    
     <p className="presentation"> My name is Oussema and I build digital projects on the web. 
    I like helping others by sharing ideas and new creations,
     so I created this website to share my work and connect with
      others who would like to collaborate. I'm always looking
       forward to working with new people and learning more skills.</p>

  

    </div>
 </div>
     
    )
}

export default Home;
