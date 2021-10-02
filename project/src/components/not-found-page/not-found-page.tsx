import React from 'react';
import './not-found-page.css';

function NotFoundPage() {
  return (
    <div className="not-found-message-wrapper">
      <p className="not-found-message">
        Error 404. Requested page not found.
      </p>
    </div>
  );
}

export default NotFoundPage;
