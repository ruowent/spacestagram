import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Search from './components/search';
import Home from './components/home';
import Navbar from './components/navbar';

import { Section } from './App.styles';

function App() {
  return (
    <Section>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/search" exact>
            <Search/>
          </Route>
          </Switch>
        </Router>
    </Section>
  );
}

export default App;
