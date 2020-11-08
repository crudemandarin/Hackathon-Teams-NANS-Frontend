import './App.css';

import { useState } from 'react';

import ApiService from './ApiService';
import TextbookBuddy from './TextbookBuddy';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import book_icon from "./open-book.svg";
import BookCard from "./BookCard";

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
      <div className="banner">
          <div class="codered-accent"> CODERED | TEAM NANS </div>
      </div>

      <div className="header">
        <div> COLLEGE BUDDY </div>
        <div className="navigation">
          <div> INFO </div>
          <div> DISCOUNTS </div>
          <div> HELP </div>
          <div> FAQ </div>
        </div>
      </div>

      <section className="section search" style={{paddingTop: '200px'}}>
          <Container maxWidth="lg">
              <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                  <Grid xl={8} lg={8} sm={6} xs={12} className="grid-res-wisw">
                      <Typography component="h3" variant="h3" color="textPrimary" className={"title-text"}>
                          <b>OBTAIN YOUR  DIGITAL TEXTBOOK AND START LEARNING</b>
                      </Typography>
                  </Grid>
                  <Grid item md={4}>
                      <div>
                          <img className="book-img" src={book_icon} alt="books"/>
                      </div>
                  </Grid>
              </Grid>
          </Container>
      </section>

      <TextbookBuddy props={ props } getTextbookSearchResults={ getTextbookSearchResults } />

      <section className="section cards" style={{paddingTop: '200px'}}>
          <Container maxWidth={"lg"}>
              <Grid container direction="row" spacing={3} style={{marginBottom: "35px"}}
                    justify="space-around">
                  <BookCard image={book_icon}
                            title={"Biology"}
                            author={"Nykolas"}
                            pages={"556"}
                            publisher={"Penguin Random House"}
                            Language={"English"}
                            Year={"2010"}
                            Size={"256Mb"}/>
              </Grid>
          </Container>
      </section>

      <div id="discount-buddy" class="section">
        <div className="title"> <b>DISCOUNTS</b> </div>
      </div>
    </>
  );
}

export default App