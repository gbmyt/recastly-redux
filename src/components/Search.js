import React from 'react';
import handleVideoSearch from '../actions/search.js';

var Search = (props) => {

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        value={props.value}
        onChange={(e) => props.handleVideoSearch(e.target.value)}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};
export default Search;
