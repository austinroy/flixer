import React from "react";
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Display from './components/display/Display';
import Upload from './components/upload/Upload';

const Routes = () => (
    <App>
      <Switch>
        <Route exact path="/" component={Display} />
        <Route exact path="/Upload" component={Upload} />
    </Switch>
    </App>
   
  );

  export default Routes;