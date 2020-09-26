import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './views/common/Navbar';
import routes from './routes';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
          {
            routes.map(route => (
              <Route key={ route.path } { ...route } />
            ))
          }
        </Switch>
      </div>
    </Fragment>

  );
}

export default App;
