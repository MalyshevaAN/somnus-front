import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './sonForm.css';

const SendForm = ({ onSubmit, user }) => {
  const [dreamText, setDreamText] = useState('');

  const handleDreamTextChange = (event) => {
    setDreamText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(dreamText);
    setDreamText('');
  };

  return (
    <Form className='sonForm' onSubmit={handleSubmit}>
      <div className='avatar-container'>
        <img src={user.avatar} alt="User Avatar" />
        <span>{user.name}</span>
      </div>
      <Form.Group className='SonSendForm' controlId="dreamText">
        <Form.Control
          
          as="textarea"
          rows={3}
          value={dreamText}
          onChange={handleDreamTextChange}
          placeholder="Введите текст своего сна"
          required
        />
      </Form.Group>
      <Button id='SendSonButton' variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
  );
};

export default SendForm;
