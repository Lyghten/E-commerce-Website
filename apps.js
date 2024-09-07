import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={ProductList} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;