import Redux from 'redux';

var valReducer = (state = '', action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
    case 'CHANGE_SEARCH':
      return { value: action.value };
    default:
			return state;
  }
};

export default valReducer;