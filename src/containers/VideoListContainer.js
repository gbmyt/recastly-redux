import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = (props) => {
  return VideoList(props);
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
const mapStateToProps = (state) => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);
