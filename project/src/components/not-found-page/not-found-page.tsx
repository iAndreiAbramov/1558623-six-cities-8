import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found-message-wrapper" data-testid="not-found-page-wrapper">
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
