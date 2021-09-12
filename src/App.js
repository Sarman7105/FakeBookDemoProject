import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Container from './components/Container/Container';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <ProtectedRoute exact path="/">
          <Home></Home>
        </ProtectedRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <ProtectedRoute path="/Home">
          <Home></Home>
        </ProtectedRoute>
        <Route path="/postDetails/:postId">
          <PostDetails></PostDetails>
        </Route>
        <Route path="/container">
          <Container/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
