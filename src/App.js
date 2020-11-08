import './App.css';

import TextbookBuddy from './TextbookBuddy'

function App() {
  return (
    <>
      <div className="banner"> <div class="codered-accent"> CODERED ] TEAM NANS </div> </div>
      
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

      <TextbookBuddy />

      <div id="discount-buddy" class="section">
        <div className="title"> DISCOUNTS </div>
      </div>

    </>
  );
}

export default App;
