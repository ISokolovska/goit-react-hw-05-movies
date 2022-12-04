import styled from 'styled-components';

export const Form = styled.form`
  display: flex;

  align-items: baseline;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
`;

export const FormButton = styled.button`
  margin-top: 50px;
  margin-left: -150px;
  padding: 17px 10px;
  width: 150px;
  border-radius: 50px;
  border: none;
  color: black;
  background-color: #40e0d0;
  font-size: 25px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: white;
  }
`;

export const InputForm = styled.input`
  padding: 15px 10px;
  margin-top: 50px;
  width: 600px;
  font-size: 25px;
  border-radius: 50px;
  border: 3px solid #40e0d0;
  outline: none;
`;
