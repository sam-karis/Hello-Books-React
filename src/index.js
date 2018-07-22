import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import Home from './components/Home';
import Root from './components/Root';
import Login from './components/Login';
import Register from './components/Register';
import Books from './components/Books';
import SingleBook from './components/SingleBook';
import Auth from './components/Auth';
import registerServiceWorker from './registerServiceWorker';
import {store } from './store/configureStore';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path={"/"} component={Root}>
                        <IndexRoute component={Home} />
                        <Route path="home" component={Home} />
                        <Route path="login" component={Login} />
                        <Route path="register" component={Register} />
                        <Route path="books" component={Books} />
                        <Route path="books/:id" component={SingleBook} />
                        <Route path="auth" component={Auth} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
