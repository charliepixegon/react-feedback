import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

function FeedbackList({ items, handleDelete }) {
  if (!items || items.length === 0) {
    return <p>No feedback items</p>;
  } else {
    return (
      <div className="feedback-list">
        <AnimatePresence>
          {items.map((item) => (
            // animates the list items when they are added or removed
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                item={item}
                key={item.id}
                handleDelete={handleDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );

    // return (
    //   <div className="feedback-list">
    //     {items.map((item) => (
    //       <FeedbackItem item={item} key={item.id} handleDelete={handleDelete} />
    //     ))}
    //   </div>
    // );
  }
}

FeedbackList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FeedbackList;
