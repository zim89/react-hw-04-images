import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

const Button = styled.button`
  border: 1px solid #607d8b;
  border-radius: 4px;
  padding: 4px 8px;
  font-weight: 600;
  font-size: 14px;

  :hover {
    color: white;
    background-color: #607d8b;
  }
`;

export { List, Button };
