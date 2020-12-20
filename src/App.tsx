import React from 'react';
import './app.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';

function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-container">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
