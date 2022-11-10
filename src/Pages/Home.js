import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/home.css';
import Footer from './Footer';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      form: false,
      box: false,
    };
  }

  render() {
    const { form, box } = this.state;
    return (
      <main>
        {form && <Redirect to="/poke-tryunfo/create-card" />}
        {box && <Redirect to="/poke-tryunfo/open-box" />}
        <div className="divMaster">
          <div className="cardForm">
            <button
              className="formBtn"
              aria-label="BTN"
              type="button"
              onClick={ () => { this.setState({ form: true }); } }
            />
            <button
              className="boxBtn"
              aria-label="BTN"
              type="button"
              onClick={ () => { this.setState({ box: true }); } }
            />
            <p
              className="pDeck"
            >
              Create Your Deck
            </p>
            <p
              className="pForm"
            >
              Open Box
            </p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}

export default Home;
