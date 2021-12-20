import React from 'react';
import PropTypes from 'prop-types';

function DeleteButton(props) {
  const { handleDelete, cardIndex } = props;
  return (
    <button
      data-testid="delete-button"
      className="btn btn-primary"
      type="button"
      onClick={ () => handleDelete(cardIndex) }
    >
      Excluir
    </button>
  );
}

DeleteButton.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  cardIndex: PropTypes.number.isRequired,
};

export default DeleteButton;
