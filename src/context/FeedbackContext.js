import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

//
// need a provider - in order for the context to be available to the entire app
//
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //
  // useEffect Hook - will only run once if you leave second argument empty
  //
  useEffect(() => {
    console.log(
      '\n\n ******** FeedbackContext.useEffect: FETCHING DATA ******** \n\n'
    );
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const res = await fetch('/feedback?_sort=id&_order=desc');
    const data = await res.json();

    setFeedback(data);
    setIsLoading(false);
  };

  //
  // ADD feedback - POST to backend
  //
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    // after adding to backend, add to state as well
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  //
  // UPDATE feedback - PUT to backend
  //
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  //
  // DELETE feedback item
  //
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      // delete from backend
      fetch(`/feedback/${id}`, {
        method: 'DELETE',
      });

      // update state by filtering out the item we just deleted
      setFeedback(feedback.filter((item) => item.id !== id));
    }
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
