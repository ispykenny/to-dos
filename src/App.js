import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            exact
            path="/dashboard"
            render={(() => <Dashboard/>)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
