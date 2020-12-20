import React from 'react';
import './app.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <main>Main Content</main>
      <Footer />
    </div>
  );
}

export default App;
