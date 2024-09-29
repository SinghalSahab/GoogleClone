import React, { useState } from 'react'
import './search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const search = ({hideButton = false}) => {
    const [{},dispatch] = useStateValue();
    const [input,setInput] = useState('');
    const navigate = useNavigate('/search');

    const search = e =>{
         e.preventDefault();
console.log("input -> " ,input );
 
   dispatch({
    type: actionTypes.SET_SEARCH_TERM,
    term: input
})

if (input) {
  navigate('/search'); 
}
}
  return (
    <form className='Search'>
        <div className="searchInput">
        <SearchIcon className="searchInput-icon"/>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <MicIcon />
        </div>
        
        {!hideButton ? (<div className='SearchButtons'>
        <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
    </div>): (
      <div className='SearchButtons'>
      <Button className='ButtonsHidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
      <Button className='ButtonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
  </div>
    )}
        
    </form>

    
  )
}

export default search;