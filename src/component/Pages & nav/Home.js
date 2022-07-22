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
     
    
     <p className="presentation"> Please check out my movies page and interact with the buttons on the website. To search for a movie within the displayed movies, search and click on the icon. To read more about the movie, click on the button “read more” in the movie block. 
     You can also add your favorite movies to your favorites page and update your list by visiting the favorites page in the nav bar</p>

  

    </div>
 </div>
     
    )
}

export default Home;
