import { Route, Switch } from "wouter";
import { Home } from "./pages/Home/Home";

function Router() {

  return (
    <>
      <Switch>
        <Route path="/">
        {<Home/>}
        </Route>
      </Switch>
    </>
  )
}

export default Router; 
