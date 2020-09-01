import React, { useState, useMemo, useEffect } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Main from "./containers/pages/Main";
import Save from "./containers/pages/Save";

import BandContext from "./BandContext";

function App() {
  const [bands, setBands] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0
  });

  useEffect(() => {
    if (localStorage.getItem('resistorCookies')) {
      let objectBands = JSON.parse(localStorage.getItem('resistorCookies'));
      console.log(localStorage.getItem('resistorCookies'));
      console.log(objectBands);
      setBands(objectBands);
    }
  }, [])

  const values= useMemo(() => ({bands, setBands}), [bands, setBands]);
  return (
    <div className="App">
      <BandContext.Provider value={values}>
        <Switch>
          <Route exact path="/" component={Main}/> 
          <Route path="/save" component={Save}/>
        </Switch>
      </BandContext.Provider>
    </div>
  );
    
}

export default App;