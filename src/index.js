import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-search-api';
import API_KEY from './private/api_key';

// Components:
import SearchBar from './components/search_bar';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }

    YTSearch({key: API_KEY, term: 'texas longhorns'}, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <SearchBar />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
