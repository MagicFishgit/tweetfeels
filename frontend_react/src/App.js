
//Import Components
import { KeyWords, SearchBar, Sentiment, TweetFeed } from './components';

import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <SearchBar />
      <TweetFeed />
      <KeyWords />
      <Sentiment />
    </div>
  );
}

export default App;
