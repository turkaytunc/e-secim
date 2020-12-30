import React from 'react';
import './app.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-container">
          <Switch>
            <Route exact path="/e-secim/" component={Homepage} />
            <Route path="/e-secim/login" component={Login} />
            <Route path="/e-secim/signup" component={Signup} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
