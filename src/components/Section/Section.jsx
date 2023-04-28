import PropTypes from 'prop-types';
import React from 'react';
import { Wrapper, Title } from './Styled';

function Section({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
