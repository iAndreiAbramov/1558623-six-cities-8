import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import './not-found-page.css';
import React from 'react';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found-message-wrapper">
      <p className="not-found-title">
        Error 404.
      </p>
      <p className="not-found-message">
        Requested page not found.
      </p>
      <Link className="not-found-link" to={ AppRoute.Home }>
        Return to main page
      </Link>
    </div>
  );
}

export default NotFoundPage;
