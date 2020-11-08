import './TextbookBuddyStyles.css';

import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

/* Grid prints one book */
const BookLedgerComponent = ( { props } ) => {
    return (
        <></>
    );
}

const SearchComponent = ( { getTextbookSearchResults } ) => {
    const [ query, setQuery ] = useState( '' );

    const search = () => getTextbookSearchResults( query );

    const handleSearch = e => { e.preventDefault(); search(); }

    const AdvanceSearch = () => {
        const [ open, setOpen ] = useState( false );
        const [ formData, setFormData ] = useState( { title: '', author: '', publisher: '', year: '', language: '' } )

        return (
            <>
                <Button onClick={ () => setOpen(true) } variant="contained"> Advance Search </Button>
                <Dialog open={ open } onClose={ () => setOpen(false) }>
                    <div className="advance-search-modal">
                        <div className="title"> Advance Search </div>
                        <TextField label="Book Title"/>
                        <TextField label="Author"/>
                        <TextField label="Publisher"/>
                        <TextField label="Year"/>
                        <TextField label="Language"/>

                        <Button color="primary" variant="contained" style={{ marginTop: '1rem' }}> Go! </Button>
                    </div>
                </Dialog>
            </>
        );
    }

    return (
        <>
            <div className="search-bar-wrapper">
                <TextField style={{ width: '100%', maxWidth: '800px' }} id="textbook-search" variant="outlined" placeholder="search by book title, author, subject, ..."
                           onKeyPress={ e => { if ( e.key === 'Enter' ) search() } } onChange={ e => setQuery( e.target.value ) } />
            </div>
            <div className="search-bar-button-wrapper">
                <Button onClick={ handleSearch } variant="contained" color="primary"> Search </Button>
                <AdvanceSearch/>
            </div>
        </>
    );
}

const TextbookBuddy = ( { props, getTextbookSearchResults } ) => {
    return (
        <div className="section">
            <div className="title"> BOOKS </div>

            <SearchComponent getTextbookSearchResults={ getTextbookSearchResults } />

            <BookLedgerComponent props={ props } />
        </div>
    );
}

export default TextbookBuddy;