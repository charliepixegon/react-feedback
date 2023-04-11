import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ items, handleDelete }) {
  if (!items || items.length === 0) {
    return <p>No feedback items</p>;
  } else {
    return (
      <div className="feedback-list">
        {items.map((item) => (
          <FeedbackItem item={item} key={item.id} handleDelete={handleDelete} />
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
