import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IFormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const Form = styled.form<IFormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #4169e1;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 200ms;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(0.2, '#4169e1')};
    }

    svg {
      margin-left: 12px;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const ContainerLoader = styled.div`
  margin: 86px 0 0 316px;
`;

export const Card = styled.div`
  margin-top: 80px;
  max-width: 600px;

  a {
    border: 2px solid;
    border-color: green;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 200ms;

    &:hover {
      transform: translateX(10px);
    }

    ul {
      /* list-style: none; */
      padding: 0 18px;
      display: flex;
      justify-content: space-between;
    }

    li {
      font-size: 18px;
      color: #3a3a3a;

      & + li {
        margin-top: 12px;
      }
    }

    li span {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;

export const TitleHistory = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 128px;
`;

export const CardHistory = styled.div`
  margin-top: 48px;
  max-width: 600px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 200ms;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 12px;
    }

    ul {
      /* list-style: none; */
      padding: 0 18px;
      display: flex;
      justify-content: space-between;
    }

    li {
      font-size: 18px;
      color: #3a3a3a;

      & + li {
        margin-top: 12px;
      }
    }

    li span {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
