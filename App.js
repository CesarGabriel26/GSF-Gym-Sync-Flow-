import * as React from 'react';
import MainScreen from './src/managers/Main';

//! Screens / Pages
import AcountScreen from './src/managers/Acount';

export default function App() {

  let token = false

  if (token) {
    return (

      <MainScreen />
  
    );
  }else {
    return (
      <AcountScreen />
    )
  }

  
}