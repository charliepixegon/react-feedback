import FeedbackItem from '../FeedbackItem';
import PropTypes from 'prop-types';

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

// // default props
// FeedbackList.defaultProps = {
//   items: [],
// };

// // types

// FeedbackList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object),
// };

export default FeedbackList;
