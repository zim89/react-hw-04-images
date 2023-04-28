import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
`;

const Li = styled.li`
  text-transform: capitalize;
`;

const Span = styled.span`
  font-weight: 500;
  color: #0277bd;
`;

export { List, Span, Li };
