import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Styled';

function Notification({ message }) {
  return <Wrapper>{message}</Wrapper>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
