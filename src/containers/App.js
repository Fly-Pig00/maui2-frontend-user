import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { history } from '../utils/history';
import Splash from './pages/Splash';
import Main from './pages/Main';

function App() {
  return (
    <div className="font-poppins bg-white">
      <Router history={history}>
        <Switch>
          <Route path="/splash">
            <Splash />
          </Route>          
          <Route path="/main">
            <Main />
          </Route>
          <Redirect to="/splash" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
