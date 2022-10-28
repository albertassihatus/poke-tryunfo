import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/pokeb.png';

function RemainingCards(props) {
  const { lastCard, onNextClick } = props;
  return (
    <div>
      {
        lastCard
          ? <button type="button" onClick={ onNextClick }>Embaralhar cartas</button>
          : (
            <>
              <div className="outer-remaining">
                <div className="inner-remaining">
                  <img src={ logo } alt="Logo do PokeTrunfo" />
                </div>
              </div>
              <button type="button" onClick={ onNextClick }>Próxima carta</button>
            </>
          )
      }
    </div>
  );
}

RemainingCards.propTypes = {
  lastCard: PropTypes.bool.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default RemainingCards;
