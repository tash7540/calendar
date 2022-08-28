
export default (events = [], action) => {
    switch (action.type) {

        case 'FETCH_ALL':
            return action.payload;
  
        case 'CREATE':
            return [...events, action.payload];

        case 'DELETE':
            return(events.filter((event) => event._id !== action.payload));

  
        default:
            return events;
    }
  };