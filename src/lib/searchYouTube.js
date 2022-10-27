var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

// import exampleVideoData from '../data/exampleVideoData.js';
// var searchYouTube = (query, callback) => {
//   var sampleData = exampleVideoData.slice(3);
//   callback(sampleData);
// };

export default searchYouTube;
// https://app-hrsei-api.herokuapp.com/api/recastly/videos