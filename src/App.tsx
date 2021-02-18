import React from 'react';
import './app.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Results from './components/results/Results';

function App(): JSX.Element {
  return (
    <Router>
      <div className="app" data-testid="application">
        <Header />
        <main className="main-container">
          <Switch>
            <Route exact path="/e-secim/" component={Homepage} />
            <Route path="/e-secim/login" component={Login} />
            <Route path="/e-secim/signup" component={Signup} />
            <Route path="/e-secim/results" component={Results} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
