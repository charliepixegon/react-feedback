import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  // extract the feedback items from the context
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback items</p>;
  } else {
    return (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            // animates the list items when they are added or removed
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem item={item} key={item.id} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }
}

export default FeedbackList;
