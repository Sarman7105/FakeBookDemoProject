import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <ProtectedRoute path="/Home">
          <Home></Home>
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
