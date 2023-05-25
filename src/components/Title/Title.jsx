import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Title({ text }) {
  return <h1>{text}</h1>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default memo(Title);
