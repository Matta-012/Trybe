import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import AlbumCard from '../components/AlbumCard';

class Search extends Component {
  constructor(props) {
    super(props);

    this.INITIAL_STATE = {
      bandName: '',
      isSearchBtnDisabled: true,
    };

    this.state = {
      ...this.INITIAL_STATE,
      bandSearched: '',
      loading: false,
      artistAlbums: [],
    };
  }

  resetForm = () => {
    this.setState(this.INITIAL_STATE);
  };

  validateLogin = () => {
    const MIN_LENGTH = 2;
    const { bandName } = this.state;

    const shouldEnable = bandName.length < MIN_LENGTH;

    this.setState({ isSearchBtnDisabled: shouldEnable });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState(
      {
        [name]: value,
      },
      this.validateLogin,
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { bandName } = this.state;

    this.setState({ loading: true }, async () => {
      try {
        const arrOfAlbums = await searchAlbumsAPI(bandName);
        this.setState(
          {
            loading: false,
            artistAlbums: [...arrOfAlbums],
            bandSearched: bandName,
          },
          this.resetForm,
        );
      } catch (error) {
        console.log(`A requisição falhou! ${error.message}`);
        this.setState(
          {
            loading: false,
            bandSearched: bandName,
          },
          this.resetForm,
        );
      }
    });
  };

  render() {
    const {
      bandName,
      isSearchBtnDisabled,
      bandSearched,
      loading,
      artistAlbums,
    } = this.state;

    const form = (
      <Form
        className="w-25 container d-flex flex-column"
        onSubmit={ this.handleSubmit }
      >
        <FloatingLabel
          controlId="floatingInput"
          label="Nome do Artista"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Nome do Artista"
            data-testid="search-artist-input"
            name="bandName"
            value={ bandName }
            onChange={ this.handleChange }
          />
        </FloatingLabel>

        <Button
          variant="primary"
          type="submit"
          data-testid="search-artist-button"
          disabled={ isSearchBtnDisabled }
        >
          Pesquisar
        </Button>
      </Form>
    );

    const albumCards = artistAlbums.map((artist) => (
      <Col key={ artist.collectionId }>
        <AlbumCard className="mb-3" artist={ artist } />
      </Col>
    ));

    return (
      <div data-testid="page-search">
        {loading ? <Loading /> : form}
        <div>
          <p>
            Resultado de álbuns de:
            {' '}
            {bandSearched}
          </p>
        </div>
        <section>
          <Container>
            <Row>
              {artistAlbums.length > 0 ? (
                albumCards
              ) : (
                <h1 className="text-center">Nenhum álbum foi encontrado</h1>
              )}
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Search;
