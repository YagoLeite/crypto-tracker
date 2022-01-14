import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import Alert from "./components/Alert";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    minHeight: "100vh",
    color: "white",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={HomePage} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
      <Alert />
    </>
  );
}

export default App;
