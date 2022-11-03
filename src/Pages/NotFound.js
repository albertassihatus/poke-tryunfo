import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/home.css';

function NotFound() {
  const history = useHistory();

  const backHome = () => {
    history.push('/poke-tryunfo');
  };

  return (
    <>
      <h1
        className="errorPage"
      >
        404 NOT FOUND
      </h1>
      <button
        type="button"
        className="homeBtn"
        onClick={ backHome }
      >
        Go Back Home
      </button>
    </>

  );
}

export default NotFound;
