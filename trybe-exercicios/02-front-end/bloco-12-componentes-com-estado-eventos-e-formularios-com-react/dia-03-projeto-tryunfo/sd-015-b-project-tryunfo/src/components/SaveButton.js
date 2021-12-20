import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function SaveButton(props) {
  const { isSaveButtonDisabled, onSaveButtonClick } = props;
  return (
    <Button
      data-testid="save-button"
      variant="primary"
      type="submit"
      disabled={ isSaveButtonDisabled }
      onClick={ onSaveButtonClick }
    >
      Salvar
    </Button>
  );
}

SaveButton.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default SaveButton;
