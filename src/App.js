import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import LogOut from './components/LogOut';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthProvider';
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
            <ProtectedRoute path="/home" component={Home} />
            <ProtectedRoute path="/create" component={Create} />
            <Route path = '/signup'>
                <SignUp />
              </Route>
              <Route exact path = '/'>
                <LogIn />
              </Route>
              <Route exact path = '/logout'>
                <LogOut />
              </Route>
              
              <Route path='/blogs/:id'>
                <BlogDetails />
              </Route>
              <Route path='/*'>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;