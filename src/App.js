import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Banner/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import AuthProvider from './contexts/AuthProvider';
import Signup from './pages/Signup';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './components/Banner/Footer/Footer';
import Booking from './pages/Booking/Booking';
import Cart from './pages/Cart';
import ManageService from './pages/ManageService';
import Myorders from './pages/PrivateRoute/Myorders';
// import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <PrivateRoute path="/cart/:serviceId">
              <Cart></Cart>
            </PrivateRoute>
            
            <PrivateRoute exact path="/myorders">
              <Myorders></Myorders>
            </PrivateRoute>

            <Route path="/manageservice">
              <ManageService></ManageService>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signin">
              <Signup></Signup>
            </Route>

            <Route path="/booking">
              <Booking></Booking>
            </Route>

            <Route path="*">
              <Notfound></Notfound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
