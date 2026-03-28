import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DesignPage from './pages/DesignPage';
import AdminPanel from './pages/AdminPanel';
import TrackOrder from './pages/TrackOrder';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/design' component={DesignPage} />
                <Route path='/admin' component={AdminPanel} />
                <Route path='/track-order' component={TrackOrder} />
            </Switch>
        </Router>
    );
};

export default App;