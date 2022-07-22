import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Splash from "../pages/Splash";
import IntroDashBoard from "../pages/_intro/IntroDashBoard";
import IntroEarn from "../pages/_intro/introEarn";
import IntroBorrow from "../pages/_intro/introBorrow";
import IntroCards from "../pages/_intro/introCards";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Earn from "../pages/Earn";
import Borrow from "../pages/Borrow";
import Stocks from "../pages/Stocks";
import Cards from "../pages/Cards";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Deposit from "../pages/Deposit";
import History from "../pages/History";

const Routes = withRouter(({ location }) => {
  return (
    <TransitionGroup className="w-full">
      <CSSTransition
        timeout={1000}
        classNames="transition-fade"
        key={location.key}
      >
        {(state) => {
          return (
            <Switch location={location}>
              <Route path="/splash" component={Splash} />
              <Route path="/introdashboard" component={IntroDashBoard} />
              <Route path="/introearn" component={IntroEarn} />
              <Route path="/introborrow" component={IntroBorrow} />
              <Route path="/introcards" component={IntroCards} />
              <Route path="/introteam" component={IntroDashBoard} />
              <Route path="/login" component={Login} />
              <Route
                path="/dashboard"
                render={(props) => <Dashboard state={state} />}
              />
              <Route path="/earn" component={Earn} />
              <Route path="/borrow" component={Borrow} />
              <Route path="/stocks" component={Stocks} />
              <Route path="/cards" component={Cards} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/terms" component={Terms} />
              <Route path="/deposit" component={Deposit} />
              <Route path="/history" component={History} />
              <Redirect to="/splash" />
            </Switch>
          );
        }}
      </CSSTransition>
    </TransitionGroup>
  );
});

export default Routes;
