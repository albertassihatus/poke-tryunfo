import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName, onInputChange,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onSaveButtonClick, hasTrunfo } = this.props;
    return (
      <div>
        <form className="formulario" id="formTeste">

          <h2>Adicionar nova carta Pokémon</h2>

          <label htmlFor="name">
            Nome:
            {' '}
            <input
              data-testid="name-input"
              type="text"
              name="name"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr1">
            Attack:
            {' '}
            <input
              data-testid="attr1-input"
              type="number"
              name="attr1"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr2">
            Deffense:
            {' '}
            <input
              data-testid="attr2-input"
              type="number"
              name="attr2"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="attr3">
            HP:
            {' '}
            <input
              data-testid="attr3-input"
              type="number"
              name="attr3"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="image">
            Pokémon:
            {' '}
            <input
              data-testid="image-input"
              type="text"
              name="image"
              id="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="rare">
            Raridade:
            <select
              data-testid="rare-input"
              name="rare"
              id="rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal" selected>Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <br />
          {
            hasTrunfo === true
              ? <p className="hasTryunf">Você já tem um Super Trunfo </p>
              : (
                <label htmlFor="trunfo">
                  <input
                    data-testid="trunfo-input"
                    type="checkbox"
                    name="trunfo"
                    id="trunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Super Trybe Trunfo
                  <br />
                </label>
              )
          }
        </form>
        <button
          className="pokeballBtn"
          aria-label="BTN"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          <img alt="" />
        </button>
      </div>
    );
  }
}

Form.propTypes = {

  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
