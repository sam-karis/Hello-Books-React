import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import Home from './components/Home';
import Root from './components/Root';
import Login from './components/Login';
import Register from './components/Register';
import Books from './components/Books';
import AddEditForm from './components/AddEditForm';
import SingleBook from './components/SingleBook';
import BorrowHistory from './components/BorrowHistory';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store/configureStore';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path={'/'} component={Root}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />
            <Route path="books" component={Books} />
            <Route path="books/:id" component={SingleBook} />
            <Route path="add" component={AddEditForm} />
            <Route path="userhistory" component={BorrowHistory} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
