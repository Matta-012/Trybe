import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function ProfileForm(props) {
  const {
    name,
    email,
    description,
    image,
    handleChange,
    isLoginBtnDisabled,
    handleSubmit,
  } = props;
  return (
    <div>
      <Form className="container w-25" onSubmit={ handleSubmit }>
        <Form.Group className="mb-3" controlId="user-name">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={ name }
            onChange={ handleChange }
            data-testid="edit-input-name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="user-email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={ email }
            onChange={ handleChange }
            data-testid="edit-input-email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="user-description">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            rows={ 3 }
            name="description"
            value={ description }
            onChange={ handleChange }
            data-testid="edit-input-description"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="user-image">
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={ image }
            onChange={ handleChange }
            data-testid="edit-input-image"
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          data-testid="edit-button-save"
          disabled={ isLoginBtnDisabled }
          onSubmit={ handleSubmit }
        >
          Salvar
        </Button>
      </Form>
    </div>
  );
}

ProfileForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  handleChange: PropTypes.func,
  isLoginBtnDisabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

ProfileForm.defaultProps = {
  email: 'test@test.com',
  description: 'test description',
  image: 'url-to-image',
  handleChange: PropTypes.func,
  isLoginBtnDisabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default ProfileForm;
