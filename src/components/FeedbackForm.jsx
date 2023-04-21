import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  // component state
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  // get data from context
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  // useEffect hook great spot to make API calls
  // the 2nd argument uses a "sideeffect"
  //  and this will run when the value changes
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setReviewText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleReviewTextChange = (e) => {
    if (reviewText === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (reviewText !== '' && reviewText.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Review must be at least 10 characters long');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setReviewText(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log('in submit');
    e.preventDefault();

    if (reviewText.trim().length > 10) {
      const newFeedback = {
        text: reviewText,
        rating,
      };

      // add new or update existing feedback
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setReviewText('');
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect ratingSelected={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleReviewTextChange}
            type="text"
            placeholder="Write a review"
            value={reviewText}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
