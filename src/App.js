import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';




function App() {
  return (
    
      
        
      <Router>
        <div className="App">
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/' element={<><Header /><Home /></>}/>
            <Route path='/checkout' element={<><Header /><Checkout /></>}/>
          </Routes>
        </div>
      </Router>
        


        
      
    
  );
}

export default App;
