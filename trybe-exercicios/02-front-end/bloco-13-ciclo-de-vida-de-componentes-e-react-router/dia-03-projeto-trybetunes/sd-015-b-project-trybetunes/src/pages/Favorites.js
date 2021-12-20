import React, { Component } from 'react';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      favoriteSongs: [],
    };
  }

  componentDidMount() {
    this.fetchFavoriteSongs();
  }

  fetchFavoriteSongs = async () => {
    try {
      const myFavoriteSongs = await getFavoriteSongs();
      this.setState({
        isLoading: false,
        favoriteSongs: [...myFavoriteSongs],
      });
    } catch (error) {
      console.log(error.message);
      this.setState({ isLoading: false });
    }
  };

  updateState = async () => {
    try {
      const myFavoriteSongs = await getFavoriteSongs();
      this.setState({
        favoriteSongs: [...myFavoriteSongs],
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  renderMusicCard = (favoriteSongs) => {
    const card = favoriteSongs.map((song) => (
      <MusicCard
        key={ song.trackId }
        trackName={ song.trackName }
        previewUrl={ song.previewUrl }
        trackId={ song.trackId }
        albumSong={ favoriteSongs }
        callbck={ this.updateState }
      />
    ));

    return card;
  };

  render() {
    const { isLoading, favoriteSongs } = this.state;
    const songList = this.renderMusicCard(favoriteSongs);
    return (
      <div data-testid="page-favorites">
        {isLoading ? <Loading /> : songList}
      </div>
    );
  }
}

export default Favorites;
