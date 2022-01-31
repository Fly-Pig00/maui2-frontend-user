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
  console.log('location', location);
  if (location.pathname === '/splash' || location.pathname === '/deposit')
    return null;
  let currentSelected = 0;
  switch(location.pathname) {
    case '/dashboard': currentSelected = 0; break;
    case '/earn': currentSelected = 1; break;
    case '/borrow': currentSelected = 2; break;
    case '/stocks': currentSelected = 3; break;
    case '/cards': currentSelected = 4; break;
    default:
      currentSelected = 0;
      break;
  }
  return (
    <>
      <div className='fixed top-[140px] w-[90%] left-[5%] md:w-[80%] md:left-[10%] z-10'>
        <AnimatedTab tabs={MENU} currentSelected={currentSelected}/>
      </div>
      <div className='fixed top-[250px] right-[5%] md:right-[10%] z-10'>
        <DarkMode />
      </div>
    </>
  );
})
const Content = withRouter(({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={1000}
        classNames='transition-fade'
        key={location.key}
      >
        <Switch location={location}>
          <Route path="/splash" component={Splash} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/earn" component={Earn} />
          <Route path="/borrow" component={Borrow} />
          <Route path="/stocks" component={Stocks} />
          <Route path="/cards" component={Cards} />
          <Redirect to="/splash" />
        </Switch>
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
