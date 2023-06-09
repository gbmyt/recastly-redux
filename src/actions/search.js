import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import value from './value.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (data) => {
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));
      dispatch(value(q));
    });
  };
};

export default handleVideoSearch;