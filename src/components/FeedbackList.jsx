import FeedbackItem from '../FeedbackItem';

function FeedbackList({ items }) {
  // display list of feedback items using prop items
  console.log('items from feedbacklist items = ' + items);
  if (!items || items.length === 0) {
    console.log('items is empty');
    return <p>No feedback items</p>;
  } else {
    console.log('items is not empty');
    return (
      <div className="feedback-list">
        {items.map((item) => (
          <FeedbackItem item={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default FeedbackList;
