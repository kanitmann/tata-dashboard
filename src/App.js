import './App.css';
import SideMenu from './Components/SideMenu';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

const Opportunities = () => {
  return <h1>Opportunities</h1>;
};

const Transfer = () => {
  return <h1>Transfer</h1>;
};

const Application = () => {
  return <h1>Application</h1>;
};

const POCDetails = () => {
  return <h1>POC Details</h1>;
};

const ITCell = () => {
  return <h1>IT Cell</h1>;
};

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
              <Dashboard />
            </Route>
            <Route path={"/Opportunities"}>
              <Opportunities />
            </Route>
            <Route path={"/Transfer"}>
              <Transfer />
            </Route>
            <Route path={"/Transfer/Application"}>
              <Application />
            </Route>
            <Route path={"/Transfer/POCDetails"}>
              <POCDetails />
            </Route>
            <Route path={"/ITCell"}>
              <ITCell />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;