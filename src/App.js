import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import Details from './BlogDetails';
import Mylists from './Mylist';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <Details />
            </Route>
            <Route path="/mylist/:id">
              <Mylists />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
