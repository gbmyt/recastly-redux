import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return state.concat(action.videoList); // look more into this syntax later
    default: return state;
  }
};

export default videoListReducer;