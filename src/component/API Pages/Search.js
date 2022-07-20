import {BsSearch} from 'react-icons/bs'



const Search = ({ handleClick, handleChange}) => {
    return (
        <>
        <div className="search-component">

        <div className="search">
        <input type='text' onChange={handleChange}/>
        </div>
      
       <button className='search-icon' onClick={() => handleClick()}><BsSearch/></button>
        </div>
        </>
    )
}

export default Search;