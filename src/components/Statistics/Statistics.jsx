import React from 'react';
import { List, Span, Li } from './Styled';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';

function Statistics(props) {
  return (
    <>
      {props.total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <List>
          {Object.keys(props).map(key => (
            <Li key={key}>
              {key}: <Span>{props[key]}</Span>
              {key === 'positivePercentage' && <>%</>}
            </Li>
          ))}
        </List>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
