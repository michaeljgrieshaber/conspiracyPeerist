import './App.css';
import Layout from './Layout/Layout';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
      
        <Switch>
        <Route path='/landing'>
          <h2>landing</h2>
          </Route>
        <Route path='/listing'>
          <h2>home</h2>
          </Route>
        <Route path='/login'>
          <h2>login page</h2>
          </Route>
          <Route path='/register'>
          <h2>register page</h2>
          </Route>
          <Route path='/view'>
          <h2>view</h2>
          </Route>
          <Route path='/create'>
          <h2>create</h2>
          </Route>
      </Switch>
      
      </Layout>
    </div>
  );
}

export default App;
