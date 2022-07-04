import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route exact path="/starred">
        This is starred
      </Route>

      <Route>You-re not supposed to be here</Route>
    </Switch>
  );
}

export default App;
