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
      
     <div id="home-page">
	
    <div className="presentation-block">
        <p className="hi-home">Welcome!,{userParse.username}</p>
     
    
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
