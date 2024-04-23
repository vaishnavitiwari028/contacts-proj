import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { GlobalProvider } from "./context/Provider";
import routes from "./routes";
import isAuthenticated from "./utils/isAuthenticated";

const RenderRoute = (route) => {
  const history = useHistory();
  document.title = route.title + " - People&Pals" || "People&Pals";
  if (route.needsAuth && !isAuthenticated()) {
    console.log(route.needsAuth);
    console.log(!isAuthenticated());
    // history.push("/auth/login");
  }
  console.log(route);
  return (
    <Route
      path={route.path}
      exact
      render={(...props) => <route.component {...props} />}
    />
  );
};

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />
          ))}
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
