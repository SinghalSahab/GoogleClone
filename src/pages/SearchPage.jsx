import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../components/useGoogleSearch';
import response from '../components/response';
import { Link } from 'react-router-dom';
import Search from "../components/search";
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const SearchPage = () => {
    const [{term},dispatch] = useStateValue();
    //live API call
   const{data} = useGoogleSearch(term);
   //mock api call
  //  const data = response;
  //   console.log(data);
  return (
    <div className='searchPage'>
        <div className="searchPage-header">
         <Link to="/">
         <img className='searchPage-Logo' src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png" alt="" />
         </Link>

         <div className="searchPage-headerBody">
         <Search  hideButton/>

         <div className="searchPage-options">
          <div className="optionsLeft">
            <div className="option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="option">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="option">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="option">
              <LocalOfferIcon />
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className="option">
              <RoomIcon />
              <Link to="/maps">Maps</Link>
            </div>
            <div className="option">
              <MoreVertIcon />
              <Link to="/more">More</Link>
            </div>
          </div>
          <div className="optionsRight">
            <div className="option">
              <Link to="/tools">Tools</Link>
            </div>
          </div>
         </div>
        </div>
       </div>
       {true && (
        <div className="searchPage-results">
          <p className='searchPage-Resultcnt'>
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map(item=>(
            <div className='searchPage-result'>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0
                   && item.pagemap?.cse_image[0]?.src &&(
                  <img className='searchPage-ResultImage' src={item.pagemap?.cse_image[0]?.src }  />
                )}
              {item.displayLink}
              </a>
              <a className='searchPage-ResultTitle' href={item.link}>
                <h3>{item.title}</h3>
              </a>
              <p className='searchPage-ResultSnippet'>
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
        
    </div>
  )
}

export default SearchPage