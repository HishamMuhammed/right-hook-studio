import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px 20px;
  background: var(--background-dark);
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid var(--accent-color);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  
  &:before {
    content: '>';
    margin-right: 0.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--accent-color);
  color: var(--text-color);
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--accent-color);
  color: var(--text-color);
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  font-family: 'Press Start 2P', cursive;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color);
    color: var(--background-dark);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Title = styled.h2`
  color: var(--accent-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const Message = styled.div<{ success?: boolean }>`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 2px solid ${props => props.success ? '#4CAF50' : '#f44336'};
  color: ${props => props.success ? '#4CAF50' : '#f44336'};
  text-align: center;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setStatus({ type: 'success', message: 'Message sent successfully!' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContactForm onSubmit={handleSubmit}>
        {status && (
          <Message success={status.type === 'success'}>
            {status.message}
          </Message>
        )}
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <TextArea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">SEND MESSAGE</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;
