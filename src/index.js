import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-search-api';
import API_KEY from './private/api_key';

// Components:
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'texas longhorns'}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    return (
      <div className="container">
        <SearchBar />
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
