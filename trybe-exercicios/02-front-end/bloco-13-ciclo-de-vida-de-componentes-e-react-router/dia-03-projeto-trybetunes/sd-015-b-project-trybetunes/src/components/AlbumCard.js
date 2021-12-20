import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AlbumCard({ artist }) {
  const { artistName, collectionName, artworkUrl100, collectionId } = artist;
  return (
    <Link
      to={ `/album/${collectionId}` }
      data-testid={ `link-to-album-${collectionId}` }
      className="card-anchor"
    >
      <Card style={ { width: '18rem' } }>
        <Card.Img variant="top" src={ artworkUrl100 } />
        <Card.Body>
          <Card.Title>{collectionName}</Card.Title>
          <Card.Text>{artistName}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

AlbumCard.propTypes = {
  artist: PropTypes.shape({
    artistName: PropTypes.string,
    collectionName: PropTypes.string,
    artworkUrl100: PropTypes.string,
    collectionId: PropTypes.number,
  }).isRequired,
};

export default AlbumCard;
