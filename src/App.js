import './App.css';

import { useState } from 'react';

import ApiService from './ApiService'
import TextbookBuddy from './TextbookBuddy'

const apiservice = new ApiService();

function App() {
  const [ props, setProps ] = useState( { books: {}, discounts: {} } );

  const getTextbookSearchResults = query => {
    apiservice.getTextbookSearchResults( query ).then( response => response.json() ).then( value => {
      let temp = JSON.parse( JSON.stringify( props ) );
      temp.books = value;
      setProps( temp );
      console.log( temp )
    } ).catch( err => console.log( 'Error fetching search results!', err ) )
  }

  return (
    <>
      <div className="banner"> <div className="codered-accent"> CODERED ] TEAM NANS </div> </div>
      
      <div className="header">
        <div> COLLEGE BUDDY </div>
        <div className="navigation">
          <div> INFO </div>
          <div> DISCOUNTS </div>
          <div> HELP </div>
          <div> FAQ </div>
        </div>
      </div>

      <div className="hero">
        <div> OBTAIN YOUR  DIGITAL TEXTBOOK AND START LEARNING </div>
      </div>

      <TextbookBuddy props={ props } getTextbookSearchResults={ getTextbookSearchResults } />

      <div id="discount-buddy" className="section">
        <div className="title"> DISCOUNTS </div>
      </div>

    </>
  );
}

export default App