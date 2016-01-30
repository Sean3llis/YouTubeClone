import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './private/api_key'

const App = () => {
  return <div>Hello World!</div>
}
console.log(API_KEY);

ReactDOM.render(<App />, document.getElementById('app'));
