///////Navigation.js
import React from 'react';
import { useState } from 'react';


const Home = ({userInput}) => {
    return (
   
     <div id="home-page">
	
    <div className="presentation-block">
        <p className="hi-home">Welcome!{userInput}</p>
    
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
