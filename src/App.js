import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navbars from './Navbars'
import Instant from './Instant'
import Buy from './Buy'
import Sell from './Sell'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbars />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/instant'>
            <Instant/>
          </Route>
          <Route path='/Buy'>
            <Buy/>
          </Route>
          <Route path='/Sell'>
            <Sell/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
