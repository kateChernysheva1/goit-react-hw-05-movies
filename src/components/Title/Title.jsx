import React, { memo } from 'react';

function Title({ text }) {
  return <h1>{text}</h1>;
}

export default memo(Title);
