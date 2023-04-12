import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  // component state
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* <RatingSelect rating={rating} setRating={setRating} /> */}
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
