import React from 'react';
import 
{ 
  BrowserRouter,
  Switch, 
  Route
} from "react-router-dom";

import Page from "./Page";

function App() {
  var listOfElements = ["Element 1", "Element 2", "Element 3"]
  return (
    <BrowserRouter>
      <div>
        <Switch>

          <Route exact path="/page1">
            <Page text="Page 1 Content" list={listOfElements}/>
          </Route>

          <Route exact path="/page2">
            <Page text="Page 2 Content" list={listOfElements}/>
          </Route>

          <Route exact path="/page3">
            <Page text="Page 3 Content" list={listOfElements}/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;