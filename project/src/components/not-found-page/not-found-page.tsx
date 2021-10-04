import React from 'react';
import './not-found-page.css';
import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found-message-wrapper">
      <p className="not-found-title">
        Error 404.
      </p>
      <p className="not-found-message">
        Requested page not found.
      </p>
      <Link className="not-found-link" to="/">Return to main page</Link>
    </div>
  );
}

export default NotFoundPage;
