import * as React from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import MainContent from './../../pages/routes'

const App = () => {
  return (
    <>
      <header>I'm a header</header>
        <Link to='/profile'>To Profile</Link>
        <Link to='/restaurants'>To restaurants</Link>
        <Link to='/bars'>To bars</Link>
      <main>
        <MainContent />
      </main>
    </>
  )
}

export default App;