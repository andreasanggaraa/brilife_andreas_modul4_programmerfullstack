import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Button from './components/Button';
import LandingImage from './components/LandingImage';
import RegisterAgen from './views/RegisterAgen';
import RegisterStrukturAgen from './views/RegisterStrukturAgen';
import LaporanAgen from './views/LaporanAgen';

function App() {

  return (
    <Router>
      <div className="App">
        <div id="sidebar">
          <Button link="/agen" content="Agen" />
          <Button link="/register-agen" content="Register Agen" />
          <Button link="/register-struktur-agen" content="Register Struktur Agen" />
        </div>
        <div id="workspace">
          <Switch>
            <Route exact path="/"><LandingImage /></Route>
            <Route exact path="/agen"><LaporanAgen /></Route>
            <Route exact path="/register-agen"><RegisterAgen /></Route>
            <Route exact path="/register-struktur-agen"><RegisterStrukturAgen /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
