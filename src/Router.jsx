import { Route, Switch } from "wouter";
import { Home } from "./pages/Home/Home";
import { Detail } from "./pages/Detail/Detail";

function Router() {
  return (
    <>
      <Switch>
        <Route path="/">{<Home />}</Route>
        <Route path="/detalle-produicto/:id">{<Detail />}</Route>
      </Switch>
    </>
  );
}

export default Router;
