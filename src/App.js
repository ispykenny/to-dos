import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Nav from './Components/Nav';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route 
            exact
            path="/"
            render={(() => <Dashboard/>)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
