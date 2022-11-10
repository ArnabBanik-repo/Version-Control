import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Repo from "./components/Repo";
import FileViewer from "./components/FileViewer";

function App() {
  const user = {
    name: "Arnab Banik",
  };
  return (
    <div className="App">
      <Navbar user={user} />
      <Switch>
        <Route
          exact
          path={"/"}
          render={(routerProps) => <Hero {...routerProps} />}
        />
        <Route
          exact
          path={"/login"}
          render={(routerProps) => <Login {...routerProps} />}
        />
        user &&
        <Route
          exact
          path={"/dashboard"}
          render={(routerProps) => <Dashboard {...routerProps} />}
        />
        <Route
          path={"/repo"}
          render={(routerProps) => <Repo routerProps={routerProps} />}
        />
        <Route
          path={"/fileViewer"}
          render={(routerProps) => <FileViewer {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
