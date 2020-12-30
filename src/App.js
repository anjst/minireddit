import './App.css';
import { NavBar } from "./components/navbar/navbar"
import { SpecificFeed } from "./components/feed/specificFeed"
import { SearchFeed } from "./components/feed/searchFeed"

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={SpecificFeed} />
        <Route path="/r/:id" exact component={SpecificFeed} />
        <Route path="/search/:searchResult" exact component={SearchFeed} />
      </Switch>
    </div>
  );
}

export default App;
