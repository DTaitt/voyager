import * as React from 'react';

import './App.css';
import * as appContent from './../../pages/routes'

export default function App() {
  return (
    <>
      <header>I'm a header</header>
      <main>
        { appContent }
      </main>
    </>
  )
}
