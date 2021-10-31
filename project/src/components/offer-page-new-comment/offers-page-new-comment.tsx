import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { adaptCommentsToFront } from '../../utils/adapters';
import { CommentPostTypes } from '../../types/comments-types';
import {
  APIRoute,
  INITIAL_RATING,
  INITIAL_REVIEW_STATE,
  MIN_COMMENT_LENGTH,
  PostNotificationMessage,
  RatingPosition
} from '../../const';
import { setCurrentHotelComments } from '../../store/actions';
import { api } from '../../index';
import { AxiosResponse } from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  setHotelComments: setCurrentHotelComments,
}, dispatch);

const offerPageNewCommentConnector = connect(null, mapDispatchToProps);
const OfferPageNewCommentConnected = offerPageNewCommentConnector(OfferPageNewComment);

type OfferPageNewCommentTypes = {
  id: string,
} & ConnectedProps<typeof offerPageNewCommentConnector>

function OfferPageNewComment(props: OfferPageNewCommentTypes): JSX.Element {
  const { id, setHotelComments } = props;
  const [rating, setRating] = useState(INITIAL_RATING);
  const [review, setReview] = useState(INITIAL_REVIEW_STATE);
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true);

  const notifySuccess = (message: string) => toast.success(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifyError = (message: string) => toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  useEffect(() => {
    if (rating.every((item) => !item) || review.length < MIN_COMMENT_LENGTH) {
      setSubmitIsDisabled(true);
    } else {
      setSubmitIsDisabled(false);
    }
  }, [rating, review]);

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    evt.preventDefault();
    setReview(() => evt.target.value);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(() => {
      const newRating = [...INITIAL_RATING];
      newRating[+evt.target.value - 1] = true;
      return newRating;
    });
  };

  const postNewComment = async (comment: CommentPostTypes, offerId: string): Promise<AxiosResponse> => (
    await api.post(`${ APIRoute.Comments }/${ offerId }`, comment)
  );

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setSubmitIsDisabled(true);
    const newReview: CommentPostTypes = {
      comment: review,
      rating: rating.findIndex((item) => item) + 1,
    };
    postNewComment(newReview, id)
      .then(({ data }) => {
        setHotelComments(adaptCommentsToFront(data));
        setRating(INITIAL_RATING);
        setReview('');
        notifySuccess(PostNotificationMessage.Success);
      })
      .catch(() => {
        setSubmitIsDisabled(false);
        notifyError(PostNotificationMessage.Error);
      });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={ handleFormSubmit }
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={ rating[RatingPosition.Perfect] }
          onChange={ handleRatingChange }
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          checked={ rating[RatingPosition.Good] }
          onChange={ handleRatingChange }
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={ rating[RatingPosition.NotBad] }
          onChange={ handleRatingChange }
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={ rating[RatingPosition.Badly] }
          onChange={ handleRatingChange }
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          checked={ rating[RatingPosition.Terribly] }
          onChange={ handleRatingChange }
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={ review }
        onChange={ handleTextAreaChange }
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={ submitIsDisabled }
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}

export { OfferPageNewComment };
export default OfferPageNewCommentConnected;
