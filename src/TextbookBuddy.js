import './TextbookBuddyStyles.css'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const BookLedgerComponent = () => {
    return (
        <>
        </>
    );
}

const SearchComponent = () => {
    return (
        <>
            <div className="search-bar-wrapper"> <TextField style={{ width: '100%', maxWidth: '800px' }} id="textbook-search" variant="outlined" label="search by book title, author, subject, ..." /> </div>
            <div className="search-bar-button-wrapper">
                <Button variant="contained" color="primary"> Search </Button>
                <Button variant="contained"> Advanced Search </Button>
            </div>
        </>
    );
}

const TextbookBuddy = () => {
    return (
        <div class="section">
            <div class="title"> <b>BOOKS</b> </div>

            <SearchComponent />

            <BookLedgerComponent />
        </div>
    );
}

export default TextbookBuddy;