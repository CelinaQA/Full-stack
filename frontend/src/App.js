import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Header/Navigation';
import Home from './components/Header/Home';
import MyTasks from './components/Header/MyTasks';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/task">
            <MyTasks />
          </Route>
          {/* <Route>
            <NotFound />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
