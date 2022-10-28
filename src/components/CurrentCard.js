import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

function CurrentCard(props) {
  const { currentCard } = props;
  return (
    <div>

      <Card
        cardName={ currentCard.name }
        cardAttr1={ currentCard.attr1 }
        cardAttr2={ currentCard.attr2 }
        cardAttr3={ currentCard.attr3 }
        cardImage={ currentCard.imgUrl }
        cardTrunfo={ currentCard.trunfo }
        cardRare={ currentCard.rare }
        count={ currentCard.count }
        id={ currentCard.id }
      />
    </div>
  );
}

CurrentCard.propTypes = {
  currentCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attr1: PropTypes.string.isRequired,
    attr2: PropTypes.string.isRequired,
    attr3: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    rare: PropTypes.string.isRequired,
    trunfo: PropTypes.bool.isRequired,
    count: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CurrentCard;
