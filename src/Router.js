import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import App from './App';
import TextEditor from './TextEditor';

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/txt/:id" component={TextEditor} />;
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default RouterApp;