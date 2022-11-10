/* eslint-disable max-len */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-unused-vars */
/* eslint-disable max-lines */
import React from 'react';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import { Redirect } from 'react-router-dom';
import { boxFour, boxLegends, boxOne, boxThree, boxTwo, raridade } from '../mock/Pokemons';
import Card from './Card';
import CurrentCard from './CurrentCard';

class Deck extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayCards: [],
      name: 'Trainer Hatus',
      attr1: '99',
      attr2: '99',
      attr3: '99',
      imgUrl: 'https://tcm-assets.pokecharms.com/modern_trainers/321bfd44-463e-468a-8ca0-c0e8d1a7f5a5.png',
      count: 1,
      image: 'trainer',
      rare: 'muito raro',
      trunfo: false,
      isSelect: false,
      haveCard: 0,
      id: '',
      currentCard: '',
      show: false,
      home: false,
    };
  }

  randomStats = (minAtt, maxAtt) => {
    const randStats = minAtt + Math.round(Math.random() * (maxAtt - minAtt));
    return randStats;
  }

  setShow = (param) => {
    this.setState({
      show: param,
    });
  }

  stateBox = (box, min, max) => {
    const percent = 0.05;
    const random = Math.floor(Math.random() * box.length);
    const randomBoolean = Math.random() < percent;

    this.setState((prev) => ({
      name: box[random].name,
      attr1: this.randomStats(min, max),
      attr2: this.randomStats(min, max),
      attr3: this.randomStats(min, max),
      image: box[random],
      arrayCards: [...prev.arrayCards, prev],
      trunfo: randomBoolean,
      rare: raridade(),
      count: prev.count + 1,
      id: box[random].id,
      imgUrl: box[random].imgUrl,
    }));
  }

  customAlert = (n) => {
    // eslint-disable-next-line no-alert
    alert(`${n} Cards Adcionados ao seu Deck`);
  }

  boxone = (e) => {
    const deck = 5;
    const min = 0;
    const max = 20;
    for (let index = 0; index < deck; index += 1) {
      this.stateBox(boxOne, min, max);
    }
    this.customAlert(deck);
  };

  boxtwo = () => {
    const deck = 5;
    const min = 0;
    const max = 40;
    for (let index = 0; index < deck; index += 1) {
      this.stateBox(boxTwo, min, max);
    }
    this.customAlert(deck);
  };

  boxthree = () => {
    const deck = 5;
    const min = 40;
    const max = 60;
    for (let index = 0; index < deck; index += 1) {
      this.stateBox(boxThree, min, max);
    }
    this.customAlert(deck);
  };

  boxfour = () => {
    const deck = 5;
    const min = 60;
    const max = 90;
    for (let index = 0; index < deck; index += 1) {
      this.stateBox(boxFour, min, max);
    }
    this.customAlert(deck);
  };

  boxLegends = () => {
    const deck = 2;
    const min = 95;
    const max = 99;
    for (let index = 0; index < deck; index += 1) {
      this.stateBox(boxLegends, min, max);
    }
    this.customAlert(deck);
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
  }

  selectedCard = (count) => {
    const { arrayCards, currentCard } = this.state;
    this.setState({
      currentCard: arrayCards.find((item) => item.count === count),
      isSelect: true,
      show: true,
    });
  }

  render() {
    const { currentCard, arrayCards, name, attr1, attr2,
      attr3, image, trunfo, rare, id, imgUrl, isSelect, haveCard, show, home } = this.state;
    return (
      <div className="boxContainer">
        {home && <Redirect to="/poke-tryunfo" />}
        <div className="boxMaster">
          <button
            className="box1"
            type="submit"
            onClick={ this.boxone }
            aria-label="tnb"
          >
            <p className="hiddenOne">NEWBIE</p>
          </button>

          <button
            className="box2"
            type="submit"
            onClick={ this.boxtwo }
            aria-label="tnb"
          >
            <p>SMALL</p>
          </button>
          <button
            className="box3"
            type="submit"
            onClick={ this.boxthree }
            aria-label="tnb"
          >
            <p>AVERAGE</p>
          </button>
          <button
            className="box4"
            type="submit"
            onClick={ this.boxfour }
            aria-label="tnb"
          >
            <p>GIANT</p>
          </button>
          <button
            className="box5"
            type="submit"
            onClick={ this.boxLegends }
            aria-label="tnb"
          >
            <p>LEGENDARY</p>
          </button>
        </div>
        <IoChevronBackCircleSharp
          onClick={ () => this.setState({ home: true }) }
          className="back"
        />
        { arrayCards.length > 0
          ? <p className="uDeck">Deck</p> : ''}
        <div className="deckContainer">
          {arrayCards.map((card, index) => (

            <div key={ index } className="cardbox">
              <div>
                <Card
                  cardName={ card.name }
                  cardAttr1={ card.attr1 }
                  cardAttr2={ card.attr2 }
                  cardAttr3={ card.attr3 }
                  cardImage={ card.imgUrl }
                  cardRare={ card.rare }
                  cardTrunfo={ card.trunfo }
                  id={ card.id }
                  count={ card.count }
                />
                <br />
                <button
                  className="selectBtn"
                  type="button"
                  onClick={ () => this.selectedCard(arrayCards[index].count) }
                >
                  Selecionar
                </button>
                <button
                  className="deleteButton"
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(arrayCards[index].count) }
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
        {isSelect ? (
          <div className="current-card">
            {
              show ? isSelect && <CurrentCard
                currentCard={ currentCard }
              /> : null
            }
            <div className="togglemap">
              <button
                type="button"
                onClick={ () => this.setShow(!show) }
              >
                {!show ? 'Show Selected Card' : 'Close'}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Deck;
