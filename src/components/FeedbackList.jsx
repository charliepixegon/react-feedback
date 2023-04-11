import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ items }) {
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

FeedbackList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
