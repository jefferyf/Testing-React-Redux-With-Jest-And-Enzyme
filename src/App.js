import React from 'react';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import './App.scss';

const tempArr = [{
  fName: "Jeff",
  lName: "Miller",
  email: "test@test.org",
  age: 16,
  onlineStatus: true
}];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts." tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
