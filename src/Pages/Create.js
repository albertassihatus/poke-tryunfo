import React from 'react';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import { Redirect } from 'react-router-dom';
import Card from '../components/Card';
import CurrentCard from '../components/CurrentCard';
import Form from '../components/Form';
import '../styles/card.css';
import Footer from './Footer';

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: false,
      arrayCards: [],
      // buttonDisabled: true,
      imgUrl: '',
      count: 1,
      currentCard: '',
      isSelect: false,
      haveCard: 0,
      show: false,
      id: '',
      // storage: [],
      home: false,
    };
  }

  validateForm = () => {
    const { name, image, rare, attr1, attr2, attr3 } = this.state;

    const sum = Number(attr1) + Number(attr2) + Number(attr3); // -> Number para transformar string em num parseInt tava dando erro no lint.

    const attrTotal = 300;
    const attrMax = 99;
    const attrMin = 0;

    const anyInfo = (
      name !== ''
      && image !== ''
      && rare !== ''
    );

    const attr = (
      sum <= attrTotal
      && attr1 <= attrMax
      && attr2 <= attrMax
      && attr3 <= attrMax
      && attr1 >= attrMin
      && attr2 >= attrMin
      && attr3 >= attrMin
    );

    if (anyInfo && attr) {
      return false;
    }
    return true;
  }

  hasTrunfo = () => {
    const { arrayCards } = this.state;
    return arrayCards.some((item) => item.trunfo);
  }

  onInputChange = ({ target }) => {
    this.setState(() => ({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }), () => {
      const { image } = this.state;
      if (target.name === 'image') {
        fetch(`https://pokeapi.co/api/v2/pokemon/${image.toLowerCase()}`)
          .then((response) => response.json())
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

  onSaveButtonClick = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      name: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      trunfo: false,
      rare: '',
      imgUrl: '',
      arrayCards: [...prev.arrayCards, prev],
      currentCard: '',
      haveCard: true,
      show: false,
      count: prev.count + 1,
      id: '',
    }));
  }

  setShow = (param) => {
    this.setState({
      show: param,
    });
  }

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

  // async componentDidMount() {
  //   this.testeStorage();
  // }

  // testeStorage = () => {
  //   const storageArr = JSON.parse(localStorage.getItem('arrayCards'));
  //   if (storageArr) {
  //     this.setState({
  //       storage: storageArr,
  //     });
  //   }
  // }

  selectCard = (count) => {
    const { arrayCards } = this.state;
    this.setState({
      currentCard: arrayCards.find((item) => item.count === count),
      isSelect: true,
      show: true,
    });
  }

  render() {
    const { name, attr1, home,
      attr2, attr3, image,
      rare, trunfo, arrayCards, imgUrl,
      // eslint-disable-next-line no-unused-vars
      currentCard, isSelect, haveCard, show, id } = this.state;

    return (
      <div style={ { height: '600px' } }>
        {home && <Redirect to="/poke-tryunfo" />}
        <div className="divMaster">
          <div className="divForm">
            <IoChevronBackCircleSharp
              onClick={ () => this.setState({ home: true }) }
              className="back"
            />
            <Form
              cardName={ name }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ trunfo }
              hasTrunfo={ this.hasTrunfo() }
              isSaveButtonDisabled={ this.validateForm() }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="preview">
            <Card
              cardName={ name }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ imgUrl }
              cardRare={ rare }
              cardTrunfo={ trunfo }
              id={ id }
            />
          </div>
        </div>
        { arrayCards.length > 0
          ? <p className="uDeck">Deck</p> : ''}
        <div className="deckContainer">
          {arrayCards.map((item, index) => (
            <div key={ index } className="cardbox">
              <Card
                cardName={ item.name }
                cardAttr1={ item.attr1 }
                cardAttr2={ item.attr2 }
                cardAttr3={ item.attr3 }
                cardImage={ item.imgUrl }
                cardTrunfo={ item.trunfo }
                cardRare={ item.rare }
                id={ item.id }
                count={ item.count }
              />
              <button
                className="selectBtn"
                type="button"
                onClick={ () => this.selectCard(arrayCards[index].count) }
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
            </div>))}
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
        <Footer />
      </div>
    );
  }
}
export default Create;
