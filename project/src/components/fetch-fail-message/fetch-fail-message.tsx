import React from 'react';
import { FETCH_FAIL_MESSAGE } from '../../const';

function FetchFailMessage(): JSX.Element {
  return (
    <span style={ {
      width: '100%',
      textAlign: 'center',
      fontSize: '26px',
      fontStyle: 'italic',
      lineHeight: '1.4',
    } }
    >
      { FETCH_FAIL_MESSAGE }
    </span>
  );
}

export default FetchFailMessage;
