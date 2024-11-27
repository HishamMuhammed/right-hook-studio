import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Section from '../components/Section';

const glitch = keyframes`
  0% {
    clip-path: inset(50% 0 30% 0);
    transform: skew(-2deg);
  }
  20% {
    clip-path: inset(20% 0 60% 0);
    transform: skew(2deg);
  }
  40% {
    clip-path: inset(40% 0 40% 0);
    transform: skew(2deg);
  }
  60% {
    clip-path: inset(60% 0 20% 0);
    transform: skew(-2deg);
  }
  80% {
    clip-path: inset(30% 0 50% 0);
    transform: skew(1deg);
  }
  100% {
    clip-path: inset(50% 0 30% 0);
    transform: skew(-2deg);
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 3rem auto 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  position: relative;

  &:hover label {
    color: var(--primary-color);
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  transition: color var(--transition-speed) ease;
  font-family: var(--alt-font);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 62, 62, 0.1);
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: 1.1rem;
  transition: all var(--transition-speed) ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 20px rgba(255, 62, 62, 0.3);
    background: rgba(255, 62, 62, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 62, 62, 0.1);
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: 1.1rem;
  min-height: 150px;
  resize: vertical;
  transition: all var(--transition-speed) ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 20px rgba(255, 62, 62, 0.3);
    background: rgba(255, 62, 62, 0.2);
  }
`;

const SubmitButton = styled.button`
  position: relative;
  padding: 1rem 2rem;
  background: var(--primary-color);
  border: none;
  border-radius: var(--border-radius);
  color: var(--text-color);
  font-family: var(--alt-font);
  font-size: 1.1rem;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 62, 62, 0.3);

    &:before {
      animation: ${glitch} 0.5s infinite;
    }
  }

  &:before {
    content: 'SEND MESSAGE';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-light);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform var(--transition-speed) ease;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Section id="contact">
      <h2>Contact Us</h2>
      <p>Have a question or want to work with us? Send us a message!</p>

      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <SubmitButton type="submit">
            SEND MESSAGE
          </SubmitButton>
        </StyledForm>
      </FormContainer>
    </Section>
  );
};

export default ContactSection;
