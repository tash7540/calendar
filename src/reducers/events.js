
export default (events = [], action) => {
    switch (action.type) {

        case 'UPDATE':
            return events.map((event) => event.eventId === action.payload.eventId ? action.payload : event);

        case 'FETCH_ALL':
            return action.payload;
  
        case 'CREATE':
            return [...events, action.payload];

        case 'DELETE':
            return(events.filter((event) => event.eventId !== action.payload));

  
        default:
            return events;
    }
  };