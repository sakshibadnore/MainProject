
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import login from './screens/login'
import password from './screens/password'
import hrdashboard from './screens/hrdashboard'
import User from './component/User'
import Modal from './component/Modal'
function App() {
  return (
    <div >
     <Router>
        <Switch>
          
          <Route path="/login" component={login} />
          <Route path="/password" component={password} />
          <Route path="/hrdashboard" component={hrdashboard}/>
          <Route path="/User" component={User}/>
          <Route path="/Modal" component={Modal}/>
        </Switch>
          </Router>
    </div>
  );
}

export default App;
