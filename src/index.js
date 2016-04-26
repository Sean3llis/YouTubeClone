import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-search-api';
import API_KEY from './private/api_key';
import _ from 'lodash';

// Components:
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      dividers: [
        {
          time: '0:46',
          title: 'First Marker'
        }
      ]
    }
    this.videoSearch('texas longhorns');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    const videoSearch = _.debounce((term) => this.videoSearch(term), 300);
    return (
      <div className="container">
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoClick={selectedVideo => this.setState({selectedVideo: selectedVideo})}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
