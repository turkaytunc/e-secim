import React from 'react';
import './app.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <main style={{ textAlign: 'center' }}>Ana İçerik</main>
      <Footer />
    </div>
  );
}

export default App;
