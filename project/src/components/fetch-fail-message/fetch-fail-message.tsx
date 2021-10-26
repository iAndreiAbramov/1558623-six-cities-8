import React from 'react';

function FetchFailMessage() {
  return (
    <span style={{width: '100%', textAlign: 'center'}}>
      Failed to get data from server. Please check your network connection and try to reload the page.
    </span>
  );
}

export default FetchFailMessage;
