import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import logo from './images/logo.png';
import './styles/card.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: false,
      arrayCards: [],
      imgUrl: '',
    };
  }

  validateForm = () => {
    const { name, image, rare, attr1, attr2, attr3 } = this.state;

    const sum = Number(attr1) + Number(attr2) + Number(attr3); // -> Number para transformar string em num parseInt tava dando erro no lint.

    const attrTotal = 300;
    const attrMax = 90;
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
      const {
        image,
      } = this.state;
      if (target.name === 'image') {
        fetch(`https://pokeapi.co/api/v2/pokemon/${image.toLowerCase()}`)
          .then((response) => response.json())
          .then((data) => this.setState({
            imgUrl: data
              .sprites
              .versions['generation-v']['black-white'].animated.front_default,
          }))
          .catch(() => this.setState((previousState) => previousState));
      }
    });
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      name: '',
      description: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      trunfo: false,
      rare: '',
      imgUrl: '',
      arrayCards: [...prev.arrayCards, prev],
    }
    ));
  }

  removeCard = (name) => {
    const { arrayCards } = this.state;
    this.setState({
      arrayCards: arrayCards.filter((item) => item.name !== name),
    });
  }

  render() {
    const { name, description, attr1,
      attr2, attr3, image,
      rare, trunfo, arrayCards, imgUrl } = this.state;

    return (
      <div>
        <img
          className="imgLogo"
          src={ logo }
          alt="pokemon logo"
        />
        <div className="divMaster">
          <div className="divForm">
            <Form
              cardName={ name }
              cardDescription={ description }
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
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ imgUrl }
              cardRare={ rare }
              cardTrunfo={ trunfo }
            />
          </div>
        </div>
        <p className="uDeck">Deck</p>
        <div className="deckContainer">
          {
            arrayCards.map((item, index) => (
              <div key={ index } className="cardbox">
                <Card
                  cardName={ item.name }
                  cardDescription={ item.description }
                  cardAttr1={ item.attr1 }
                  cardAttr2={ item.attr2 }
                  cardAttr3={ item.attr3 }
                  cardImage={ item.imgUrl }
                  cardTrunfo={ item.trunfo }
                  cardRare={ item.rare }

                />
                <button
                  className="deleteButton"
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(arrayCards[index].name) }
                >
                  Excluir

                </button>
              </div>
            ))
          }

        </div>
      </div>
    );
  }
}

export default App;
