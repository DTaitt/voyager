import * as React from 'react';
import { Segment, Sidebar as _Sidebar } from 'semantic-ui-react'
 
import Header from './../Header/Header'
import Sidebar from './../Sidebar/Sidebar'
import './App.css';
import MainContent from './../../pages/routes'

const App = () => {
  return (
    <_Sidebar.Pushable as={Segment} style={{height:'100vh'}} >
      <Sidebar />
      <_Sidebar.Pusher>
        <Header />
        <main className='app_main'>
          <MainContent />
        </main>
      </_Sidebar.Pusher>
    </_Sidebar.Pushable>
  )
}

export default App;