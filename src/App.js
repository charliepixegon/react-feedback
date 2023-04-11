import { useState } from 'react';
import Header from './components/Header';

import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const newFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };

  return (
    <>
      <Header />
      <FeedbackList items={feedback} handleDelete={deleteFeedback} />
    </>
  );
}

export default App;
