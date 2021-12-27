import "./index.css";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/pages/Home";
import Blogs from "./components/pages/Blogs";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={Home} />
      <Route exact path="/blogs" component={Blogs} />
    </Switch>
  );
}

export default App;
