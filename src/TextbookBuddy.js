import './TextbookBuddyStyles.css';

import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const BookLedgerComponent = () => {
    return (
        <>
        </>
    );
}

const SearchComponent = ( { getTextbookSearchResults } ) => {
    const [ query, setQuery ] = useState( '' );

    const search = () => getTextbookSearchResults( query );

    const handleSearch = e => { e.preventDefault(); search(); }

    return (
        <>
            <div className="search-bar-wrapper">
                <TextField style={{ width: '100%', maxWidth: '800px' }} id="textbook-search" variant="outlined" placeholder="search by book title, author, subject, ..."
                           onKeyPress={ e => { if ( e.key === 'Enter' ) search() } } onChange={ e => setQuery( e.target.value ) } />
            </div>
            <div className="search-bar-button-wrapper">
                <Button onClick={ handleSearch } variant="contained" color="primary"> Search </Button>
                <Button variant="contained"> Advanced Search </Button>
            </div>
        </>
    );
}

const TextbookBuddy = ( { props, getTextbookSearchResults } ) => {
    return (
<<<<<<< HEAD
        <div className="section">
            <div className="title"> BOOKS </div>
=======
        <div class="section">
            <div class="title"> <b>BOOKS</b> </div>
>>>>>>> homepage

            <SearchComponent getTextbookSearchResults={ getTextbookSearchResults } />

            <BookLedgerComponent props={ props } />
        </div>
    );
}

export default TextbookBuddy;