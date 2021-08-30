import './App.css';
import 'react-app-polyfill/stable'
import 'core-js'
import SideMenu from './Components/SideMenu';
import DashBoard from './Components/DashBoard';
import Opportunities from './Components/Opportunities';
import Transfer from './Components/Transfer';
import Application from './Components/Application';
import POCDetails from './Components/POCDetails';
import ITCell from './Components/ITCell';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';


function App() {

  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }} />
        <div className={`container ${inactive ? 'inactive': ''}`}>
          <Switch>
            <Route exact path={"/"}>
              <DashBoard />
            </Route>
            <Route path={"/opportunities"}>
              <Opportunities />
            </Route>
            <Route exact path={"/transfer"}>
              <Transfer />
            </Route>
            <Route path={"/transfer/application"}>
              <Application />
            </Route>
            <Route path={"/transfer/pocdetails"}>
              <POCDetails />
            </Route>
            <Route path={"/itcell"}>
              <ITCell />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;