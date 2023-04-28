import React from 'react';
import { List, Button } from 'components/FeedbackOptions/Styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, handleClick }) {
  return (
    <List>
      {options.map(el => (
        <li key={el}>
          <Button name={el} onClick={handleClick}>
            {el}
          </Button>
        </li>
      ))}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
