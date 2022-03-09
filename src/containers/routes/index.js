import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Splash from '../pages/Splash';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Earn from '../pages/Earn';
import Borrow from '../pages/Borrow';
import Stocks from '../pages/Stocks';
import Cards from '../pages/Cards';
import Deposit from '../pages/Deposit';
import History from '../pages/History';

const Routes = withRouter(({ location }) => {
  return (
    <TransitionGroup className="w-full">
      <CSSTransition
        timeout={1000}
        classNames='transition-fade'
        key={location.key}
      >
        {(state) => {
          return (
            <Switch location={location}>
              <Route path="/splash" component={Splash}/>
              <Route path="/login" component={Login}/>
              <Route path="/dashboard" render={(props) => (
                <Dashboard state={state}/>
              )}/>
              <Route path="/earn" component={Earn}/>
              <Route path="/borrow" component={Borrow}/>
              <Route path="/stocks" component={Stocks}/>
              <Route path="/cards" component={Cards}/>
              <Route path="/deposit" component={Deposit}/>
              <Route path="/history" component={History}/>
              <Redirect to="/splash" />
            </Switch>
          )
        }}
      </CSSTransition>
    </TransitionGroup>
  )
});

export default Routes;