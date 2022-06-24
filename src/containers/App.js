import { Router } from 'react-router-dom';
import { history } from '../utils/history';
import Header from '../components/Header';
import Routes from './routes';
import Footer from '../components/Footer';

import { ToastContainer } from "react-toastify";
import BackgroundWorker from '../components/BackgroundWorker';

function App() {
  return (
    <div className="relative font-poppins w-full h-full min-h-screen bg-[#DEE2E8] dark:bg-[#000000] transition-all duration-1000">
      <Router history={history}>
        <Header />
        <Routes />
        <Footer />
      </Router>
      <ToastContainer />
      <BackgroundWorker />
    </div>
  );
}

export default App;
