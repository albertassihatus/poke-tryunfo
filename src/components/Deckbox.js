/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-unused-vars */
/* eslint-disable max-lines */
import PropTypes from 'prop-types';
import React from 'react';

function Deck(props) {
  const { currentCard, arrayCards, name, attr1, attr2,
    attr3, image, trunfo, rare, id, imgUrl, isSelect, haveCard, show } = props;
  randomStats = (minAtt, maxAtt) => {
    const randStats = minAtt + Math.round(Math.random() * (maxAtt - minAtt));
    return randStats;
  };

  setShow = (param) => {
    this.setState({
      show: param,
    });
  };

  boxone = (e) => {
    e.preventDefault();
    const min = 0;
    const max = 20;
    const percent = 0.05;
    const random = Math.floor(Math.random() * boxOne.length);
    const randomBoolean = Math.random() < percent;

    this.setState((prev) => ({
      name: boxOne[random],
      attr1: this.randomStats(min, max),
      attr2: this.randomStats(min, max),
      attr3: this.randomStats(min, max),
      image: boxOne[random],
      arrayCards: [...prev.arrayCards, prev],
      trunfo: randomBoolean,
      rare: raridade(),
      currentCard: '',
      haveCard: true,
      show: true,
      count: prev.count + 1,
    }), () => {
      const { image } = this.state;
      if (image) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${image.toLowerCase()}`)
          .then((res) => res.json())
          .then((data) => this.setState({
            id: data.id,
            imgUrl: data
              .sprites
              .versions['generation-v']['black-white'].animated.front_default,
          }))
          .catch(() => this.setState((previousState) => previousState));
      }
    });
  };

  boxtwo = () => {
    const min = 0;
    const max = 40;
    const percent = 0.15;
    const randomBoolean = Math.random() < percent;
    const random = Math.floor(Math.random() * boxTwo.length);

    this.setState((prev) => ({
      name: boxTwo[random],
      attr1: this.randomStats(min, max),
      attr2: this.randomStats(min, max),
      attr3: this.randomStats(min, max),
      image: boxTwo[random],
      arrayCards: [...prev.arrayCards, prev],
      trunfo: randomBoolean,
      rare: raridade(),
      count: prev.count + 1,
    }), () => {
      const { image } = this.state;
      if (image) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${image.toLowerCase()}`)
          .then((res) => res.json())
          .then((data) => this.setState({
            id: data.id,
            imgUrl: data
              .sprites
              .versions['generation-v']['black-white'].animated.front_default,
          }))
          .catch(() => this.setState((previousState) => previousState));
      }
    });
  };

  boxthree = () => {
    const min = 40;
    const max = 60;
    const percent = 0.15;
    const random = Math.floor(Math.random() * boxThree.length);
    const randomBoolean = Math.random() < percent;

    this.setState((prev) => ({
      name: boxThree[random],
      attr1: this.randomStats(min, max),
      attr2: this.randomStats(min, max),
      attr3: this.randomStats(min, max),
      image: boxThree[random],
      arrayCards: [...prev.arrayCards, prev],
      trunfo: randomBoolean,
      rare: raridade(),
      count: prev.count + 1,
    }), () => {
      const { image } = this.state;
      if (image) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${image.toLowerCase()}`)
          .then((res) => res.json())
          .then((data) => this.setState({
            id: data.id,
            imgUrl: data
              .sprites
              .versions['generation-v']['black-white'].animated.front_default,
          }))
          .catch(() => this.setState((previousState) => previousState));
      }
    });
  };

  const boxfour = () => {
    const min = 60;
    const max = 99;
    const percent = 0.15;
    const random = Math.floor(Math.random() * boxFour.length);
    const randomBoolean = Math.random() < percent;

    setState((prev) => ({
      name: boxFour[random],
      attr1: randomStats(min, max),
      attr2: randomStats(min, max),
      attr3: randomStats(min, max),
      image: boxFour[random],
      arrayCards: [...prev.arrayCards, prev],
      trunfo: randomBoolean,
      rare: raridade(),
      count: prev.count + 1,
    }), async () => {
      const { image } = this.state;
      if (image) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${image.toLowerCase()}`)
          .then((res) => res.json())
          .then((data) => this.setState({
            id: data.id,
            imgUrl: data
              .sprites
              .versions['generation-v']['black-white'].animated.front_default,
          }))
          .catch(() => this.setState((previousState) => previousState));
      }
    });
  };

  removeCard = (count) => {
    const { arrayCards } = this.state;
    this.setState({
      arrayCards: arrayCards.filter((item) => item.count !== count),
      isSelect: false,
    }, () => {
      if (arrayCards.length === 0) {
        this.setState({ haveCard: false });
      }
    });
  };

  selectedCard = (count) => {
    const { arrayCards, currentCard } = this.state;
    this.setState({
      currentCard: arrayCards.find((item) => item.count === count),
      isSelect: true,
      show: true,
    });
  };

  return (
    <div>

      <p>
        Name
        {name}
      </p>
      <p>
        Name
        {attr1}
      </p>
      <p>
        Name
        {attr2}
      </p>
      <p>
        Name
        {attr3}
      </p>
      <p>
        Name
        {image}
      </p>
      <p>
        Name
        {trunfo}
      </p>
      <p>
        Name
        {id}
      </p>
      <p>
        Name
        {imgUrl}
      </p>
    </div>
  );
}

Deckbox.propTypes = {
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

export default Deck;
