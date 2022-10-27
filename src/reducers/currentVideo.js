import Redux from 'redux';

//TODO: define a reducer for the currentVideo field of our state.
var currentVideoReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video;
    default:
      return state;
  }
};

export default currentVideoReducer;
