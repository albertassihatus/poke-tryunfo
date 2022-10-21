import PropTypes from 'prop-types';
import React from 'react';
import { FaStar } from 'react-icons/fa';

class Card extends React.Component {
  render() {
    const { cardName,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <div>
        <div className="previewCard">
          <div
            className={ `outer-bound ${cardRare === 'raro' && 'silver'}
    ${cardRare === 'muito raro' && 'gold'}` }
          >
            <p className="name" data-testid="name-card">{cardName}</p>
            <img src={ cardImage } alt={ cardImage } data-testid="image-card" />
            <p className="atq" data-testid="attr1-card">
              Attack:
              {'  '}
              {cardAttr1}
            </p>
            <p className="def" data-testid="attr2-card">
              Deffense:
              {'  '}
              {cardAttr2}

            </p>
            <p className="hp" data-testid="attr3-card">
              {cardAttr3}
            </p>
            {cardTrunfo
              && <p className="trunfo" data-testid="trunfo-card"><FaStar /></p>}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {

  cardName: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
