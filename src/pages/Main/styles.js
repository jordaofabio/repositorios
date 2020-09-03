import styled from 'styled-components';

export const Form = styled.div.attrs((props) => ({
  invalid: props.invalid,
}))`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: ${(props) => (!props.invalid ? '1px solid #eee' : '1px solid red')};
    padding: 10px 15px;
    font-size: 16px;
    background: ${(props) => (!props.invalid ? '#FFF' : '#ffd7d4')};
  }
`;

export const SubmitButton = styled.button`
  background: #0077cc;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0;
  }
`;

export const List = styled.ul`
  list-style: none;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const Loading = styled.div`
  padding: 20px;
  color: #333;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Star = styled.span`
  color: #0077cc;
  cursor: pointer;
`;
