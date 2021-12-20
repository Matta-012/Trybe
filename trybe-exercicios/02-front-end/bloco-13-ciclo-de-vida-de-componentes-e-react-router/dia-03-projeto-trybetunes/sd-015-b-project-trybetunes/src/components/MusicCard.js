import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isFavorite: false,
    };
  }

  componentDidMount() {
    this.fetchFavoriteSongs();
  }

  findSongObj = (trackId, albumSong) => {
    if (Array.isArray(albumSong)) {
      return albumSong.find((song) => song.trackId === trackId);
    }
    return albumSong;
  };

  handleChange = async (event, trackId, albumSong, callbck) => {
    const { checked } = event.target;

    const song = this.findSongObj(trackId, albumSong);

    try {
      this.setState({ isLoading: true }, async () => {
        if (checked) {
          await addSong(song);
          this.setState({ isLoading: false, isFavorite: true });
        } else {
          await removeSong(song);
          if (callbck) {
            await callbck();
          }
          this.setState({ isLoading: false, isFavorite: false });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  fetchFavoriteSongs = async () => {
    const { trackId } = this.props;
    try {
      const myFavoriteSongs = await getFavoriteSongs();
      const isChecked = myFavoriteSongs.some(
        (song) => song.trackId === trackId,
      );
      this.setState({
        isLoading: false,
        isFavorite: isChecked,
      });
    } catch (error) {
      console.log(error.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { trackName, previewUrl, trackId, albumSong, callbck } = this.props;
    const { isLoading, isFavorite } = this.state;

    const musicCard = (
      <>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <Form.Group className="mb-3" controlId={ trackId }>
          <Form.Check
            type="checkbox"
            label="Favorita"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ (event) => this.handleChange(event, trackId, albumSong, callbck) }
            checked={ isFavorite }
          />
        </Form.Group>
      </>
    );
    return <div>{isLoading ? <Loading /> : musicCard}</div>;
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  callbck: PropTypes.func,
  trackId: PropTypes.number,
  albumSong: PropTypes.shape({
  }).isRequired,
};

MusicCard.defaultProps = {
  trackId: 12,
  callbck: () => '',
};

export default MusicCard;
