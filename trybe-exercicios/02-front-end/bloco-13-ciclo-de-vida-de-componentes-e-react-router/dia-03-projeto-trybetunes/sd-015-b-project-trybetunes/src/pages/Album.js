import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumSongs: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  componentDidUpdate() {
    this.generateSongList();
    this.generateAlbumCard();
  }

  fetchAPI = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    try {
      const response = await getMusics(id);
      this.setState({
        isLoading: false,
        albumSongs: [...response],
      });
    } catch (error) {
      console.log(error.message);
      this.setState({
        isLoading: false,
        albumSongs: [],
      });
    }
  };

  generateAlbumCard = () => {
    const { albumSongs } = this.state;
    const { artistName, artworkUrl100, collectionName } = albumSongs[0];
    return (
      <Card style={ { width: '18rem' } }>
        <Card.Img variant="top" src={ artworkUrl100 } />
        <Card.Body>
          <Card.Title data-testid="album-name">{collectionName}</Card.Title>
          <Card.Text data-testid="artist-name">{artistName}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  generateSongList = () => {
    const { albumSongs } = this.state;

    const trackList = albumSongs
      .slice(1)
      .map((song) => (
        <MusicCard
          key={ song.trackId }
          trackName={ song.trackName }
          previewUrl={ song.previewUrl }
          trackId={ song.trackId }
          albumSong={ song }
        />
      ));

    return trackList;
  };

  render() {
    const { albumSongs, isLoading } = this.state;
    const isAlbumSongsPopulated = albumSongs.length > 0;
    const renderAlbumAndSongs = (
      <>
        <div>{isAlbumSongsPopulated && this.generateAlbumCard()}</div>
        <div>{isAlbumSongsPopulated && this.generateSongList()}</div>
      </>
    );
    return (
      <div data-testid="page-album" className="d-flex">
        {isLoading ? <Loading /> : renderAlbumAndSongs}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.string.isRequired,
    },
  }).isRequired,
};

export default Album;
