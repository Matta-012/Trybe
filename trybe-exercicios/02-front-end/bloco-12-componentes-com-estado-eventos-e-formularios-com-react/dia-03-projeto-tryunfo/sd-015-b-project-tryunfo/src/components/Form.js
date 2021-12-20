import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SaveButton from './SaveButton';
import CardTrunfo from './CardTrunfo';

class Form extends Component {
  render() {
    const { onInputChange, onSaveButtonClick } = this.props;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
    } = this.props;

    return (
      <form
        onSubmit={ onSaveButtonClick }
        className="d-flex flex-column align-items-center mt-4"
      >
        <h2>Adicionar nova carta</h2>
        <div className="mb-3">
          <label htmlFor="cardName" className="form-label">
            Nome
            <input
              type="text"
              name="cardName"
              data-testid="name-input"
              className="form-control"
              id="cardName"
              onChange={ onInputChange }
              value={ cardName }
              required
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="cardDescription" className="form-label">
            Descrição
            <textarea
              name="cardDescription"
              data-testid="description-input"
              className="form-control"
              id="cardDescription"
              onChange={ onInputChange }
              value={ cardDescription }
              required
            />
          </label>
        </div>

        <div className="mb-3 d-flex flex-row align-items-center justify-content-end">
          <span className="px-1">Attr01</span>
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            className="form-control number-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
            min="0"
            max="90"
            required
          />
        </div>

        <div className="mb-3 d-flex flex-row align-items-center justify-content-end">
          <span className="px-1">Attr02</span>
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            className="form-control number-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
            min="0"
            max="90"
            required
          />
        </div>

        <div className="mb-3 d-flex flex-row align-items-center justify-content-end">
          <span className="px-1">Attr03</span>
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            className="form-control number-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
            min="0"
            max="90"
            required
          />
        </div>

        <div className="mb-3 d-flex flex-row align-items-center justify-content-end">
          <span className="px-1">Imagem</span>
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            className="form-control img-input"
            onChange={ onInputChange }
            value={ cardImage }
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rare-input" className="form-label">
            Raridade
            <select
              id="rare-input"
              className="form-select form-control"
              data-testid="rare-input"
              name="cardRare"
              onChange={ onInputChange }
              value={ cardRare }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          {!hasTrunfo
            ? <CardTrunfo changeHandler={ onInputChange } isChecked={ cardTrunfo } />
            : <span>Você já tem um Super Trunfo em seu baralho</span>}

          <SaveButton
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ onSaveButtonClick }
          />
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
