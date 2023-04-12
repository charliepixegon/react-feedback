import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [reviewText, setReviewText] = useState('');

  const handleReviewTextChange = (e) => {
    console.log(e.target.value);
    setReviewText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo rating select component */}
        <div className="input-group">
          <input
            onChange={handleReviewTextChange}
            type="text"
            placeholder="Write a review"
            value={reviewText}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
