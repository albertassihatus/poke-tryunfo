import React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '../components/Box';
import Form from '../components/Form';
import '../styles/card.css';
import bagContext from './Context';

function Provider({ children }) {
  const history = useHistory();

  const formPage = () => {
    <Form />;
    history.push('/create-card');
  };

  const boxPage = () => {
    <Box />;
    history.push('/open-box');
  };

  const renderContent = () => {
    <div className="connect-wallet-container">
      <button
        type="submit"
        onClick={ formPage }
      >
        FORM
      </button>
      <button
        type="submit"
        onClick={ boxPage }
      >
        FORM
      </button>
    </div>;
  };

  const context = {
    renderContent,
  };

  return (
    <bagContext.Provider
      value={ context }
    >
      {children}
    </bagContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
