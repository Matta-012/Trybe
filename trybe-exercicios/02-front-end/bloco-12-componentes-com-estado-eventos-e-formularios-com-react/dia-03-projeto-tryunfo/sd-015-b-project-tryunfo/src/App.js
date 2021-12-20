import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import DeleteButton from './components/DeleteButton';
import FilterCards from './components/FilterCards';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.INITIAL_STATE = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardDeck: [],
      nameFilter: '',
      rarityFilter: 'todas',
      trunfoFilter: false,
    };

    this.state = this.INITIAL_STATE;
  }

  validateFormValues = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const entries = Object.entries(this.state);
    const excludedKeys = [
      'cardTrunfo',
      'hasTrunfo',
      'isSaveButtonDisabled',
      'cardDeck',
      'nameFilter',
      'rarityFilter',
      'trunfoFilter',
    ];

    const filteredEntries = entries.filter(
      (entrie) => !excludedKeys.includes(entrie[0]),
    );
    const attrValid = filteredEntries
      .filter((entrie) => entrie[0].includes('cardAttr'))
      .every((attr) => {
        const MAX_NUMBER = 90;
        const MAX_SUM = 210;
        const sum = parseInt(cardAttr1, 10)
          + parseInt(cardAttr2, 10)
          + parseInt(cardAttr3, 10);

        if (attr[1] >= 0 && attr[1] <= MAX_NUMBER && sum <= MAX_SUM) {
          return true;
        }
        return false;
      });
    const isValidCard = filteredEntries.every((entrie) => entrie[1]);

    const enableButton = isValidCard && attrValid;

    this.setState(
      {
        isSaveButtonDisabled: !enableButton,
      },
      this.verifyHasTrunfoAndSetState,
    );

    return attrValid;
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.validateFormValues,
    );
  };

  resetForm = () => {
    const { cardDeck } = this.state;
    const prevDeck = [...cardDeck];
    const updatedState = this.INITIAL_STATE;

    updatedState.cardDeck = prevDeck;
    this.setState(updatedState, this.verifyHasTrunfoAndSetState);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();

    this.setState((state) => {
      const newCard = { ...state };
      delete newCard.hasTrunfo;
      delete newCard.isSaveButtonDisabled;
      delete newCard.cardDeck;
      return {
        cardDeck: [...state.cardDeck, newCard],
      };
    }, this.resetForm);
  };

  verifyHasTrunfoAndSetState = () => {
    const { cardDeck } = this.state;
    const deckHasTrunfo = cardDeck.some((card) => card.cardTrunfo);

    this.setState({ hasTrunfo: deckHasTrunfo });
  };

  handleDelete = (cardIndex) => {
    this.setState(
      (prevState) => ({
        cardDeck: prevState.cardDeck.filter(
          (_card, index) => index !== cardIndex,
        ),
      }),
      this.verifyHasTrunfoAndSetState,
    );
  };

  handleFilter = () => {
    const { cardDeck, nameFilter, rarityFilter, trunfoFilter } = this.state;

    return cardDeck
      .filter((card) => {
        if (trunfoFilter) return card.cardTrunfo;
        if (!nameFilter && rarityFilter === 'todas') return card;
        if (!nameFilter && rarityFilter !== 'todas') {
          return card.cardRare === rarityFilter;
        }

        const cardNameFilter = card.cardName.toLowerCase()
          .includes(nameFilter.toLowerCase());

        if (nameFilter && rarityFilter !== 'todas') {
          return card.cardRare === rarityFilter && cardNameFilter;
        }

        return cardNameFilter;
      })
      .map((card, index) => (
        <div key={ index }>
          <Card { ...card } />
          <DeleteButton
            cardIndex={ index }
            handleDelete={ this.handleDelete }
          />
        </div>
      ));
  };

  render() {
    const { nameFilter, rarityFilter, trunfoFilter } = this.state;
    const deck = this.handleFilter();
    return (
      <div>
        <header className="header p-2">
          <h1 className="text-center">Tryunfo</h1>
        </header>
        <main>
          <section className="form-container">
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <section className="text-center">
            <h3>Pré-visualização da Carta</h3>
            <Card { ...this.state } />
          </section>
          <section className="text-center">
            <FilterCards
              onInputChange={ this.onInputChange }
              nameFilter={ nameFilter }
              rarityFilter={ rarityFilter }
              trunfoFilter={ trunfoFilter }
              handleFilter={ this.handleFilter }
            />
          </section>
          <section className="text-center">
            <h2>Todas as Cartas</h2>
            {deck.length > 0 ? deck : <p>Não há cartas</p>}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
