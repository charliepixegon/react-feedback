import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

// need a provider - in order for the context to be available to the entire app

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // will only run once if you leave second argument empty
  useEffect(() => {
    console.log('useEffect in FeedbackContext');
    fetchFeedback();
  }, []);

  // fetch feedback
  const fetchFeedback = async () => {
    const res = await fetch(
      'http://localhost:3333/feedback?_sort=id&_order=desc'
    );
    const data = await res.json();
    // console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const newFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  // set item to be updated
  const editFeedback = (item) => {
    console.log('editing');
    setFeedbackEdit({ item, edit: true });
  };

  // update feedback item
  const updateFeedback = (id, updItem) => {
    console.log('updating');
    console.log(`id: ${id} updItem: ${updItem}`);

    // setFeedback(feedback.map((item) => (item.id === id ? updItem : item)));

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
