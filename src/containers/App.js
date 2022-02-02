import { Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { history } from '../utils/history';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Splash from './pages/Splash';
import Dashboard from './pages/Dashboard';
import AnimatedTab from '../components/AnimatedTab';
import DarkMode from '../components/DarkMode';
import Earn from './pages/Earn';
import Borrow from './pages/Borrow';
import Stocks from './pages/Stocks';
import Cards from './pages/Cards';

const MENU = [
  { title: 'Dashboard', url: '/dashboard' },
  { title: 'Earn', url: '/earn' },
  { title: 'Borrow', url: '/borrow' },
  { title: 'Stocks', url: '/stocks' },
  { title: 'Cards', url: '/cards' },
];

const Header = withRouter(({ location }) => {
  if (location.pathname === '/splash' || location.pathname === '/deposit')
    return null;
  return (
    <>
      <div className='fixed top-[100px] w-[360px] left-[calc(50%-180px)] md:w-[900px] md:left-[calc(50%-450px)] z-50'>
        <AnimatedTab tabs={MENU}/>
      </div>
      <div className='fixed top-[210px] right-[calc(50%-180px)] md:right-[calc(50%-450px)] z-50'>
        <DarkMode />
      </div>
    </>
  );
})
const Content = withRouter(({ location }) => {
  return (
    <TransitionGroup className="w-full h-full overflow-auto">
      <CSSTransition
        timeout={1000}
        classNames='transition-fade'
        key={location.key}
      >
        {(state) => {
          return (
            <Switch location={location}>
              <Route path="/splash" component={Splash}/>
              <Route path="/dashboard" render={(props) => (
                <Dashboard state={state}/>
              )}/>
              <Route path="/earn" component={Earn}/>
              <Route path="/borrow" component={Borrow}/>
              <Route path="/stocks" component={Stocks}/>
              <Route path="/cards" component={Cards}/>
            <Redirect to="/splash" />
          </Switch>
          )
        }}
      </CSSTransition>
    </TransitionGroup>
  )
});
function App() {  
  return (
    <div className="font-poppins w-full h-screen bg-[#DEE2E8] dark:bg-[#000000] transition-all duration-1000">
      <Router history={history}>
        <Header />
        <Content />
      </Router>
    </div>
  );
}

export default App;
